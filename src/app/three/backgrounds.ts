import * as THREE from 'three';

export const createBackground1 = (theme: 'light' | 'dark'): THREE.Group<THREE.Object3DEventMap> => {
  const spacing = 45;
  const center = [300, -160, 0];
  const dimensions = [-1890, 1245, 1050];

  const drawBackgroundLine = (vectorA: THREE.Vector3, vectorB: THREE.Vector3): THREE.Line => {
    const MAX_POINTS = 2;
    const positions = new Int16Array(MAX_POINTS * 3);

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    lineGeometry.setDrawRange(0, MAX_POINTS);

    const positionAttribute = lineGeometry.getAttribute('position');
    positionAttribute.setXYZ(0, vectorA.x, vectorA.y, vectorA.z);
    positionAttribute.setXYZ(1, vectorB.x, vectorB.y, vectorB.z);

    const material = new THREE.LineBasicMaterial({
      color: theme === 'light' ? '#d1d5db' : '#374151',
    });

    return new THREE.Line(lineGeometry, material);
  };

  const backgroundLines: THREE.Line[] = [];
  for (const [i1, d1] of dimensions.entries()) {
    for (let x = 0; Math.abs(x) <= Math.abs(d1); x += spacing * Math.sign(d1)) {
      for (const [i2, d2] of dimensions.entries()) {
        if (i1 === i2) continue;
        const i3 = dimensions.findIndex((d) => d !== d1 && d !== d2);
        const getVector = (arr: [index: number, dimension: number][]): THREE.Vector3 => {
          const [x, y, z] = arr.sort((a, b) => a[0] - b[0]).map(([i, d]) => center[i] + d);
          return new THREE.Vector3(x, y, z);
        };
        backgroundLines.push(
          drawBackgroundLine(
            getVector([
              [i1, x],
              [i2, 0],
              [i3, 0],
            ]),
            getVector([
              [i1, x],
              [i2, d2],
              [i3, 0],
            ]),
          ),
        );
      }
    }
  }

  const backgroundGroup = new THREE.Group();
  backgroundLines.forEach((line) => backgroundGroup.add(line));
  backgroundGroup.rotation.y = Math.PI / 4;
  backgroundGroup.matrixAutoUpdate = false;
  backgroundGroup.updateMatrix();

  return backgroundGroup;
};
