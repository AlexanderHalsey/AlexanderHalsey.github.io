import WebGL from 'three/addons/capabilities/WebGL.js';

import { renderBackground1, renderRubixCube } from './renderers';

const backgroundRenderer = renderBackground1();
const rubixCubeRenderer = renderRubixCube();

if (!WebGL.isWebGL2Available()) {
  const warning = WebGL.getWebGL2ErrorMessage();
  document.body.appendChild(warning);
}

(function () {
  const f = () => {
    console.log('backgroundRenderer', backgroundRenderer.info);
    console.log('rubixCubeRenderer', rubixCubeRenderer.info);
  };
  window.setInterval(f, 20000);
  f();
})();
