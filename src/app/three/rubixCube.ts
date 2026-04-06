import * as THREE from 'three';

export const RUBIX_CUBE_POSITION = new THREE.Vector3(0, 0, 0);
export const RUBIX_CUBE_SIZE = 69;

const BOX_SIZE = RUBIX_CUBE_SIZE / 3;
const DEGREES_PER_SECOND = 225;
const PAUSE_DURATION_MS = 6000;
const START_DELAY_MS = 2000;

type RubixCube = THREE.Group<THREE.Object3DEventMap>;
type RubixCubePiece = THREE.Object3D<THREE.Object3DEventMap>;

type Face = 'U' | 'D' | 'L' | 'R' | 'F' | 'B';
type Direction = 'CW' | 'CCW';
interface Move {
  face: Face;
  direction: Direction;
}

export const createRubixCube = (): RubixCube => {
  const rubixCube = new THREE.Group();
  for (let x = 0; x <= 2; x++) {
    for (let y = 0; y <= 2; y++) {
      for (let z = 0; z <= 2; z++) {
        if (x === 1 && y === 1 && z === 1) {
          // skip center piece
          continue;
        }
        const box = new THREE.BoxGeometry(BOX_SIZE, BOX_SIZE, BOX_SIZE);
        const rubixCubeColors: {
          color: string;
          condition: (x: number, y: number, z: number) => boolean;
        }[] = [
          {
            color: 'orange',
            condition: (ix, _iy, _iz) => ix === 2,
          },
          {
            color: '#c41108',
            condition: (ix, _iy, _iz) => ix === 0,
          },
          {
            color: 'yellow',
            condition: (_ix, iy, _iz) => iy === 2,
          },
          {
            color: 'white',
            condition: (_ix, iy, _iz) => iy === 0,
          },
          {
            color: 'green',
            condition: (_ix, _iy, iz) => iz === 2,
          },
          {
            color: '#0d28d9',
            condition: (_ix, _iy, iz) => iz === 0,
          },
        ];
        const materials = rubixCubeColors.map(({ color, condition }) =>
          condition(x, y, z)
            ? new THREE.MeshBasicMaterial({
                map: new THREE.TextureLoader().load(`rubix-cube-sticker.svg`),
                color,
              })
            : new THREE.MeshBasicMaterial({ color: 'black' }),
        );
        const rubixCubePiece = new THREE.Mesh(box, materials);
        rubixCubePiece.position.set(
          x * BOX_SIZE - BOX_SIZE,
          y * BOX_SIZE - BOX_SIZE,
          z * BOX_SIZE - BOX_SIZE,
        );
        rubixCube.add(rubixCubePiece);
      }
    }
  }
  rubixCube.position.set(...RUBIX_CUBE_POSITION.toArray());
  return rubixCube;
};

const SHUFFLE_MOVES: Move[] = [
  { face: 'U', direction: 'CW' },
  { face: 'R', direction: 'CCW' },
  { face: 'F', direction: 'CW' },
  { face: 'L', direction: 'CW' },
  { face: 'D', direction: 'CCW' },
  { face: 'B', direction: 'CW' },
  { face: 'R', direction: 'CW' },
  { face: 'U', direction: 'CCW' },
];

export const shuffleCube = (rubixCube: RubixCube): ((delta: number) => void) => {
  let forward = true;
  let moveIndex = 0;
  let pivot: THREE.Group | null = null;
  let accumulated = 0;
  let pauseStart: number | null = null;
  let startTime: number | null = null;

  const currentMove = (): Move => {
    if (forward) return SHUFFLE_MOVES[moveIndex];
    const move = SHUFFLE_MOVES[SHUFFLE_MOVES.length - 1 - moveIndex];
    return { face: move.face, direction: move.direction === 'CW' ? 'CCW' : 'CW' };
  };

  const setupPivot = (move: Move): void => {
    const facePieces = getFacePieces(rubixCube, move.face);
    const center = getCenter(facePieces);
    pivot = new THREE.Group();
    pivot.position.copy(center);
    rubixCube.add(pivot);
    for (const piece of facePieces) pivot.attach(piece);
    accumulated = 0;
  };

  const teardownPivot = (move: Move): void => {
    if (!pivot) return;
    const axis = getFaceAxis(move.face);
    const sign = move.direction === 'CW' ? -1 : 1;
    pivot.rotation[axis] = THREE.MathUtils.degToRad(90) * sign;
    for (const piece of [...pivot.children]) rubixCube.attach(piece);
    rubixCube.remove(pivot);
    pivot = null;
  };

  return (delta: number) => {
    if (startTime === null) startTime = Date.now();
    if (Date.now() - startTime < START_DELAY_MS) return;

    if (pauseStart !== null) {
      if (Date.now() - pauseStart >= PAUSE_DURATION_MS) {
        forward = !forward;
        moveIndex = 0;
        pauseStart = null;
      }
      return;
    }

    if (!pivot) setupPivot(currentMove());

    const move = currentMove();
    const axis = getFaceAxis(move.face);
    const sign = move.direction === 'CW' ? -1 : 1;
    const step = DEGREES_PER_SECOND * (delta / 1000);
    pivot!.rotation[axis] += THREE.MathUtils.degToRad(step) * sign;
    accumulated += step;

    if (accumulated >= 90) {
      teardownPivot(move);
      moveIndex++;
      if (moveIndex >= SHUFFLE_MOVES.length) pauseStart = Date.now();
    }
  };
};

const getFaceAxis = (face: Face): 'x' | 'y' | 'z' => {
  if (face === 'U' || face === 'D') return 'y';
  if (face === 'L' || face === 'R') return 'x';
  return 'z';
};

const getFacePieces = (rubixCube: RubixCube, face: Face): RubixCubePiece[] => {
  const axis = getFaceAxis(face);
  const value = face === 'L' || face === 'D' || face === 'B' ? -BOX_SIZE : BOX_SIZE;
  return rubixCube.children.filter((piece) => Math.abs(piece.position[axis] - value) < 1);
};

const getCenter = (facePieces: RubixCubePiece[]): THREE.Vector3 => {
  const center = new THREE.Vector3();
  facePieces.forEach((piece) => center.add(piece.position));
  return center.divideScalar(facePieces.length);
};
