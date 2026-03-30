import * as THREE from 'three';

import { LANDING_CONFIG, getStartConfig, screenPosToCameraPos } from './camera';
import { setupScrollObserver, waitForEl, waitForElLoaded } from './observers';
import { RUBIX_CUBE_SIZE } from './rubixCube';

const computeCameraPositions = (
  camera: THREE.PerspectiveCamera,
  rubixCube: THREE.Group<THREE.Object3DEventMap>,
  meEl: Element,
): { startPos: THREE.Vector3; endPos: THREE.Vector3; scrollAtLanding: number } => {
  const start = getStartConfig();
  const rect = meEl.getBoundingClientRect();

  const fovV = THREE.MathUtils.degToRad(camera.fov);
  const endDistance =
    (RUBIX_CUBE_SIZE * window.innerHeight) / (2 * LANDING_CONFIG.cubeTargetPx * Math.tan(fovV / 2));

  const startPos = screenPosToCameraPos(
    new THREE.Vector3(
      start.screenFraction.x * window.innerWidth,
      start.screenFraction.y * window.innerHeight,
      0,
    ),
    start.distance,
    camera.fov,
    camera.aspect,
    rubixCube.position,
  );

  const endPos = screenPosToCameraPos(
    new THREE.Vector3(
      rect.left + rect.width * LANDING_CONFIG.handsFractionX,
      LANDING_CONFIG.viewportFractionY * window.innerHeight,
      0,
    ),
    endDistance,
    camera.fov,
    camera.aspect,
    rubixCube.position,
  );

  const docHandsY = rect.top + window.scrollY + rect.height * LANDING_CONFIG.handsFractionY;
  const scrollAtLanding = docHandsY - LANDING_CONFIG.viewportFractionY * window.innerHeight;

  return { startPos, endPos, scrollAtLanding };
};

const animateScene = (
  camera: THREE.PerspectiveCamera,
  renderer: THREE.WebGLRenderer,
  startPos: THREE.Vector3,
  endPos: THREE.Vector3,
  scrollAtLanding: number,
): void => {
  const alphaHeight = Math.min(1, Math.max(0, window.scrollY / scrollAtLanding));

  // Past the landing point: pin the canvas in document space so it scrolls off naturally.
  // Before it: keep it fixed to the viewport so the animation plays.
  if (window.scrollY >= scrollAtLanding) {
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = `${scrollAtLanding}px`;
  } else {
    renderer.domElement.style.position = 'fixed';
    renderer.domElement.style.top = '0';
  }

  const width = window.innerWidth;
  const height = window.innerHeight;
  const currentSize = renderer.getSize(new THREE.Vector2());
  if (currentSize.width !== width || currentSize.height !== height) {
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }

  camera.position.copy(startPos.clone().lerp(endPos, alphaHeight));
  camera.lookAt(camera.position.x, camera.position.y, 0);
};

export const setupScrollAnimation = (
  camera: THREE.PerspectiveCamera,
  renderer: THREE.WebGLRenderer,
  rubixCube: THREE.Group,
): void => {
  waitForElLoaded('#me').then((meEl) => {
    let { startPos, endPos, scrollAtLanding } = computeCameraPositions(camera, rubixCube, meEl);

    const onScroll = () => animateScene(camera, renderer, startPos, endPos, scrollAtLanding);

    const onResize = () => {
      ({ startPos, endPos, scrollAtLanding } = computeCameraPositions(camera, rubixCube, meEl));
      onScroll();
    };

    waitForEl('#rubix-cube').then((el) => setupScrollObserver(el, onScroll));

    window.addEventListener('resize', onResize);
    window.addEventListener('load', onResize);
    onResize();
  });
};
