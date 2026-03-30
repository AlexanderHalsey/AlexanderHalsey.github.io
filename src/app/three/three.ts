import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import WebGL from 'three/addons/capabilities/WebGL.js';

import { prefersReducedMotion } from '@/helpers/match-media.helper';

import { createCamera } from './camera';
import { createRubixCube } from './rubixCube';
import { setupScrollAnimation } from './scene';

const ORBIT_CONTROLS_FLAG = false;
const RENDER_FLAG = true;
const FOV = 50;

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
if (RENDER_FLAG) renderer.setAnimationLoop(animate);
renderer.domElement.id = 'rubix-cube';
document.body.appendChild(renderer.domElement);

const camera = createCamera(FOV);

const rubixCube = createRubixCube();
scene.add(rubixCube);

let controls: OrbitControls;
if (ORBIT_CONTROLS_FLAG) {
  controls = new OrbitControls(camera, renderer.domElement);
}

function animate() {
  if (ORBIT_CONTROLS_FLAG) controls.update();
  if (!prefersReducedMotion) {
    rubixCube.rotation.x += 0.001;
    rubixCube.rotation.y += 0.001;
  }
  if (RENDER_FLAG) renderer.render(scene, camera);
}

if (!RENDER_FLAG) renderer.render(scene, camera);

export const initScrollAnimation = (): void => {
  if (!prefersReducedMotion) {
    setupScrollAnimation(camera, renderer, rubixCube);
  }
};

if (process.env['NODE_ENV'] === 'development') {
  window.setInterval(() => {
    console.log('renderer', renderer.info);
  }, 20000);
}

if (!WebGL.isWebGL2Available()) {
  const warning = WebGL.getWebGL2ErrorMessage();
  document.body.appendChild(warning);
}
