import * as THREE from 'three';

export const createRubixCube = (): THREE.Group<THREE.Object3DEventMap> => {
  const center = [110, 0, 700];
  const boxSize = 30;

  const rubixCube = new THREE.Group();
  for (let x = 0; x <= 2; x++) {
    for (let y = 0; y <= 2; y++) {
      for (let z = 0; z <= 2; z++) {
        if (x === 1 && y === 1 && z === 1) {
          // skip center piece
          continue;
        }
        const box = new THREE.BoxGeometry(boxSize, boxSize, boxSize);
        const materials = rubixCubeColors.map(({ color, condition }) =>
          condition(x, y, z)
            ? new THREE.MeshBasicMaterial({
                map: new THREE.TextureLoader().load(`rubix-cube-stickers/${color}.svg`),
              })
            : new THREE.MeshBasicMaterial({ color: 'black' }),
        );
        const rubixCubePiece = new THREE.Mesh(box, materials);
        rubixCubePiece.position.set(
          x * boxSize - boxSize,
          y * boxSize - boxSize,
          z * boxSize - boxSize,
        );
        rubixCube.add(rubixCubePiece);
      }
    }
  }
  rubixCube.position.set(center[0], center[1], center[2]);
  return rubixCube;
};

const rubixCubeColors: {
  color: string;
  condition: (x: number, y: number, z: number) => boolean;
}[] = [
  {
    color: 'orange',
    condition: (ix, _iy, _iz) => ix === 2,
  },
  {
    color: 'red',
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
    color: 'blue',
    condition: (_ix, _iy, iz) => iz === 0,
  },
];
