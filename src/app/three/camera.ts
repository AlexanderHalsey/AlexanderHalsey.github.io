import * as THREE from 'three';

import { RUBIX_CUBE_POSITION } from './rubixCube';

export const LANDING_CONFIG = {
  cubeTargetPx: 90,
  handsFractionX: 0.73,
  handsFractionY: 0.2,
  viewportFractionY: 0.5,
};

const START_CONFIG_NARROW = { screenFraction: { x: 0.5, y: 0.65 }, distance: 400 };
const START_CONFIG_WIDE = { screenFraction: { x: 0.72, y: 0.48 }, distance: 240 };
const ASPECT_NARROW = 0.5; // ~portrait phone (9:16)
const ASPECT_WIDE = 1.6; // ~widescreen desktop (16:10)

export const getStartConfig = (): {
  screenFraction: { x: number; y: number };
  distance: number;
} => {
  const aspect = window.innerWidth / window.innerHeight;
  const alpha = THREE.MathUtils.clamp(
    (aspect - ASPECT_NARROW) / (ASPECT_WIDE - ASPECT_NARROW),
    0,
    1,
  );
  return {
    screenFraction: {
      x: THREE.MathUtils.lerp(
        START_CONFIG_NARROW.screenFraction.x,
        START_CONFIG_WIDE.screenFraction.x,
        alpha,
      ),
      y: THREE.MathUtils.lerp(
        START_CONFIG_NARROW.screenFraction.y,
        START_CONFIG_WIDE.screenFraction.y,
        alpha,
      ),
    },
    distance: THREE.MathUtils.lerp(START_CONFIG_NARROW.distance, START_CONFIG_WIDE.distance, alpha),
  };
};

const INITIAL_CAMERA_Z = 1000;

export const createCamera = (fov: number): THREE.PerspectiveCamera => {
  const camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight);
  camera.position.set(RUBIX_CUBE_POSITION.x, RUBIX_CUBE_POSITION.y, INITIAL_CAMERA_Z);
  camera.lookAt(RUBIX_CUBE_POSITION);
  return camera;
};

export const screenPosToCameraPos = (
  screenPos: THREE.Vector3,
  distance: number,
  fov: number,
  aspect: number,
  cubePos: THREE.Vector3,
): THREE.Vector3 => {
  const fovV = THREE.MathUtils.degToRad(fov);
  const fovH = 2 * Math.atan(Math.tan(fovV / 2) * aspect);
  const ndcX = 2 * (screenPos.x / window.innerWidth) - 1;
  const ndcY = 1 - 2 * (screenPos.y / window.innerHeight);
  const cameraX = cubePos.x - distance * Math.tan(fovH / 2) * ndcX;
  const cameraY = cubePos.y - distance * Math.tan(fovV / 2) * ndcY;
  return new THREE.Vector3(cameraX, cameraY, cubePos.z + distance);
};
