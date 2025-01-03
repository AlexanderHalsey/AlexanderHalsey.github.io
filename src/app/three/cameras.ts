import * as THREE from 'three';

export const createCamera1 = (): THREE.PerspectiveCamera => {
  const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight);
  camera.position.set(0, 0, 1000);
  camera.lookAt(0, 0, 500);
  return camera;
};

const bezierCurveCamera1 = new THREE.CubicBezierCurve3(
  new THREE.Vector3(0, 0, 1000),
  new THREE.Vector3(150, 150, 1500),
  new THREE.Vector3(650, 550, 1000),
  new THREE.Vector3(850, 1200, 700),
);

export const createBezierCurveCamera1 = (): THREE.Line<
  THREE.BufferGeometry<THREE.NormalBufferAttributes>,
  THREE.LineBasicMaterial,
  THREE.Object3DEventMap
> => {
  const points = bezierCurveCamera1.getPoints(50);
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineBasicMaterial({ color: 'red' });
  return new THREE.Line(geometry, material);
};

export const moveCamera1 = (camera: THREE.PerspectiveCamera) => {
  console.log('moving camera');
  const t = document.body.getBoundingClientRect().top;
  const maxHeight = 430;
  const positionRange = t / maxHeight < -1 ? 1 : t / maxHeight > 0 ? 0 : -t / 450;
  const position = bezierCurveCamera1.getPoint(positionRange);
  camera.position.set(position.x, position.y, position.z);
  camera.lookAt(300 * positionRange, 20 * positionRange, 500 - 500 * positionRange);
};
