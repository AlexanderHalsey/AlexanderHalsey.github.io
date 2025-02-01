import * as THREE from 'three';

import { getObjectKeys } from '@/helpers/types.helper';

const CAMERA_CONFIGURATIONS = {
  // Top of rubix cube render screen with minimum width
  start0: {
    position: new THREE.Vector3(250, 80, 1000),
    target: new THREE.Vector3(0, 0, 500),
  },
  // Top of rubix cube render screen with maximum width
  start1: {
    position: new THREE.Vector3(-240, -125, 1000),
    target: new THREE.Vector3(0, 0, 500),
  },
  // Bottom of rubix cube render screen with minimum width
  end0: {
    position: new THREE.Vector3(200, 200, 1550),
    target: new THREE.Vector3(0, 340, 500),
  },
  // Bottom of rubix cube render screen with maximum width
  end1: {
    position: new THREE.Vector3(800, 170, 1150),
    target: new THREE.Vector3(460, 220, 700),
  },
} as const;

export const createCamera = (): THREE.PerspectiveCamera => {
  const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight);
  camera.position.set(0, 0, 1000);
  camera.lookAt(0, 0, 500);
  return camera;
};

export const getCameraCoordinates = (
  key: 'position' | 'target',
  alphaWidth: number,
  alphaHeight: number,
): THREE.Vector3 => {
  const [start0, start1, end0, end1] = getObjectKeys(CAMERA_CONFIGURATIONS).map(
    (cameraKey) => CAMERA_CONFIGURATIONS[cameraKey][key],
  );

  const [start, end] = [
    start0.clone().lerp(start1, alphaWidth),
    end0.clone().lerp(end1, alphaWidth),
  ];

  return start.lerp(end, alphaHeight);
};
