import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, OnDestroy, PLATFORM_ID } from '@angular/core';

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import WebGL from 'three/addons/capabilities/WebGL.js';

import { prefersReducedMotion } from '@/helpers/match-media.helper';

import { createCamera } from '@/three/camera';
import { createRubixCube } from '@/three/rubixCube';
import { setupScrollAnimation } from '@/three/scene';

const ORBIT_CONTROLS_FLAG = false;
const RENDER_FLAG = true;
const FOV = 50;

@Injectable({
  providedIn: 'root',
})
export class ThreeService implements OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);

  private scene?: THREE.Scene;
  private renderer?: THREE.WebGLRenderer;
  private camera?: THREE.PerspectiveCamera;
  private rubixCube?: THREE.Group<THREE.Object3DEventMap>;
  private controls?: OrbitControls;
  private scrollAnimationCleanup?: () => void;
  private debugIntervalId?: number;

  init(host: HTMLElement): void {
    if (!isPlatformBrowser(this.platformId) || this.renderer) return;

    this.scene = new THREE.Scene();

    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.domElement.id = 'rubix-cube';
    host.appendChild(this.renderer.domElement);

    this.camera = createCamera(FOV);

    this.rubixCube = createRubixCube();
    this.scene.add(this.rubixCube);

    if (ORBIT_CONTROLS_FLAG) {
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    }

    if (RENDER_FLAG) {
      this.renderer.setAnimationLoop(this.animate);
    } else {
      this.renderer.render(this.scene, this.camera);
    }

    if (!prefersReducedMotion) {
      this.scrollAnimationCleanup = setupScrollAnimation(
        this.camera,
        this.renderer,
        this.rubixCube,
      );
    }

    if (process.env['NODE_ENV'] === 'development') {
      this.debugIntervalId = window.setInterval(() => {
        console.log('renderer', this.renderer?.info);
      }, 20000);
    }

    if (!WebGL.isWebGL2Available()) {
      const warning = WebGL.getWebGL2ErrorMessage();
      host.appendChild(warning);
    }
  }

  ngOnDestroy(): void {
    this.renderer?.setAnimationLoop(null);
    this.controls?.dispose();
    this.scrollAnimationCleanup?.();

    if (this.debugIntervalId !== undefined) {
      window.clearInterval(this.debugIntervalId);
    }

    if (this.rubixCube) {
      this.disposeRubixCube(this.rubixCube);
      this.scene?.remove(this.rubixCube);
    }

    this.renderer?.dispose();
    this.renderer?.domElement.remove();

    this.debugIntervalId = undefined;
    this.scrollAnimationCleanup = undefined;
    this.controls = undefined;
    this.rubixCube = undefined;
    this.camera = undefined;
    this.renderer = undefined;
    this.scene = undefined;
  }

  private readonly animate = (): void => {
    if (!this.renderer || !this.scene || !this.camera) {
      return;
    }

    if (ORBIT_CONTROLS_FLAG) {
      this.controls?.update();
    }

    // if (!prefersReducedMotion && this.rubixCube) {
    //   this.rubixCube.rotation.x += 0.0005;
    //   this.rubixCube.rotation.y += 0.0005;
    //   this.rubixCube.rotation.z += 0.0005;
    // }

    if (RENDER_FLAG) {
      this.renderer.render(this.scene, this.camera);
    }
  };

  private disposeRubixCube(rubixCube: THREE.Group<THREE.Object3DEventMap>): void {
    rubixCube.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) {
        return;
      }

      child.geometry.dispose();

      const materials = Array.isArray(child.material) ? child.material : [child.material];
      materials.forEach((material) => {
        if ('map' in material && material.map) {
          material.map.dispose();
        }
        material.dispose();
      });
    });
  }
}
