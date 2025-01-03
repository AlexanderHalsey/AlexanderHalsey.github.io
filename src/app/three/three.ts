import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { createBackground1 } from './backgrounds';
import { createRubixCube } from './rubixCube';
import { createBezierCurveCamera1, createCamera1, moveCamera1 } from './cameras';

const ORBIT_CONTROLS_FLAG = false;
const RENDER_FLAG = true;

createScene();

function createScene() {
  const scene = new THREE.Scene();
  let theme: 'light' | 'dark' =
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';

  scene.background = new THREE.Color(theme === 'light' ? '#f1efef' : '#0f192a');

  const renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop(animate);
  document.body.appendChild(renderer.domElement);

  const camera = createCamera1();

  const rubixCube = createRubixCube();
  scene.add(rubixCube);
  const background1 = createBackground1(theme);
  scene.add(background1);

  scene.add(createBezierCurveCamera1());

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

  if (!WebGL.isWebGL2Available()) {
    const warning = WebGL.getWebGL2ErrorMessage();
    document.body.appendChild(warning);
  }

  (function () {
    const f = () => {
      console.log(renderer.info);
    };
    window.setInterval(f, 20000);
    f();
  })();

  const onWindowResize = () => {
    console.log('resizing');
    camera.aspect = 1.5;
    camera.updateProjectionMatrix();
    // renderer.setSize(window.innerWidth, window.innerHeight)
  };

  window.addEventListener('scroll', () => moveCamera1(camera));
  window.addEventListener('resize', () => onWindowResize());
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    theme = event.matches ? 'dark' : 'light';
    scene.background = new THREE.Color(theme === 'light' ? '#f1efef' : '#0f192a');
    background1.children.forEach((line) => {
      ((line as THREE.Line).material as THREE.LineBasicMaterial).color = new THREE.Color(
        theme === 'light' ? '#d1d5db' : '#374151',
      );
    });
  });
}
