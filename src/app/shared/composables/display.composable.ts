import { DestroyRef, inject, signal } from '@angular/core';

export function useDisplay() {
  const isMobile = signal(false);

  function onResize() {
    isMobile.set(window.innerWidth < 768);
  }

  window.addEventListener('resize', onResize);

  inject(DestroyRef).onDestroy(() => window.removeEventListener('resize', onResize));

  return { isMobile };
}
