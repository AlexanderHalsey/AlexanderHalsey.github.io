import * as THREE from 'three';

import { getCameraCoordinates } from './camera';

// minimum / maximum viewport width
const [MIN_WIDTH, MAX_WIDTH] = [500, 2500] as const;

export const animateScene = (
  camera: THREE.PerspectiveCamera,
  renderer: THREE.WebGLRenderer,
  rubixCube: THREE.Group<THREE.Object3DEventMap>,
) => {
  const me = document.querySelector('#me');
  if (!me) return;

  const boundingClientRect = me.getBoundingClientRect();
  const [width, height] = [
    window.innerWidth,
    boundingClientRect.top +
      // add 40% of image height to include hands catching the cube
      // boundingClientRect.height * 0.4 -
      // ideally should be using inferred height but for some reason
      // the image height is not correctly inferred on page load
      642 * 0.4 -
      document.body.getBoundingClientRect().top,
  ];

  // There is a portion of the screen where the cube has already been caught
  // but still visible as we scroll down. The animationHeight is the height
  // where the cube hasn't been caught yet.
  const animationHeight = height * 0.6;
  const [alphaWidth, alphaHeight] = [
    (Math.min(MAX_WIDTH, width) - MIN_WIDTH) / (MAX_WIDTH - MIN_WIDTH),
    Math.min(animationHeight, -document.body.getBoundingClientRect().top) / animationHeight,
  ];

  const currentSize = renderer.getSize(new THREE.Vector2());
  if (currentSize.width !== width || currentSize.height !== height) {
    if (currentSize.width !== width) {
      const d = 0.8 + 0.2 * alphaWidth;
      const scale = new THREE.Vector3(d, d, d);
      rubixCube.scale.set(...scale.toArray());
    }
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }

  const position = getCameraCoordinates('position', alphaWidth, alphaHeight);
  const target = getCameraCoordinates('target', alphaWidth, alphaHeight);
  camera.position.set(...position.toArray());
  camera.lookAt(...target.toArray());
};
