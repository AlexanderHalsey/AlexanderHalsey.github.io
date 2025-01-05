import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import { createBackground1 } from './backgrounds';
import { createRubixCube } from './rubixCube';
import { createBezierCurveCamera1, createCamera1, moveCamera1 } from './cameras';
import { ClassWatcher } from './classWatcher';

const ORBIT_CONTROLS_FLAG = false;
const RENDER_FLAG = false;

export function renderBackground1(): THREE.WebGLRenderer {
  const scene = new THREE.Scene();
  const theme: 'light' | 'dark' = document.body.classList.contains('darkmode') ? 'dark' : 'light';

  scene.background = new THREE.Color(theme === 'light' ? '#f1efef' : '#0f192a');

  const renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth / 2, window.innerHeight / 2, false);
  renderer.domElement.id = 'grid-room-3d';
  document.body.appendChild(renderer.domElement);

  const camera = createCamera1();

  const background1 = createBackground1(theme);
  scene.add(background1);

  scene.add(createBezierCurveCamera1());

  function animate() {
    if (RENDER_FLAG) renderer.render(scene, camera);
  }

  animate();

  const onWindowResize = () => {
    camera.aspect = 1.5;
    camera.updateProjectionMatrix();
    // renderer.setSize(window.innerWidth, window.innerHeight)
  };

  window.addEventListener('scroll', () => {
    moveCamera1(camera);
    animate();
  });
  window.addEventListener('resize', () => {
    onWindowResize();
    animate();
  });
  const onThemeChange = (theme: 'light' | 'dark') => {
    scene.background = new THREE.Color(theme === 'light' ? '#f1efef' : '#0f192a');
    background1.children.forEach((line) => {
      ((line as THREE.Line).material as THREE.LineBasicMaterial).color = new THREE.Color(
        theme === 'light' ? '#d1d5db' : '#374151',
      );
    });
    animate();
  };
  const classWatcher = new ClassWatcher(
    document.body,
    'darkmode',
    () => onThemeChange('dark'),
    () => onThemeChange('light'),
  );
  window.onbeforeunload = () => {
    classWatcher.disconnect();
  };
  return renderer;
}

export function renderRubixCube(): THREE.WebGLRenderer {
  const scene = new THREE.Scene();

  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  if (RENDER_FLAG) renderer.setAnimationLoop(animate);
  renderer.domElement.id = 'rubix-cube';
  document.body.appendChild(renderer.domElement);

  const camera = createCamera1();

  const rubixCube = createRubixCube();
  scene.add(rubixCube);

  let controls: OrbitControls;
  if (ORBIT_CONTROLS_FLAG) {
    controls = new OrbitControls(camera, renderer.domElement);
  }
  function animate() {
    if (ORBIT_CONTROLS_FLAG) controls.update();
    rubixCube.rotation.x += 0.001;
    rubixCube.rotation.y += 0.001;
    if (RENDER_FLAG) renderer.render(scene, camera);
  }

  const onWindowResize = () => {
    camera.aspect = 1.5;
    camera.updateProjectionMatrix();
    // renderer.setSize(window.innerWidth, window.innerHeight)
  };

  window.addEventListener('scroll', () => {
    moveCamera1(camera);
  });
  window.addEventListener('resize', () => {
    onWindowResize();
  });

  return renderer;
}
