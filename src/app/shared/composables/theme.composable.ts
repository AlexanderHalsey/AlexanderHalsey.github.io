import { computed, DestroyRef, inject, signal } from '@angular/core';

const BACKGROUND_COLORS = {
  light: {
    background1: '#bf5252',
    background2: '#3d9464',
  },
  dark: {
    background1: '#301616',
    background2: '#0f2e1d',
  },
} as const;

export function useTheme() {
  const theme = signal<'light' | 'dark'>('light');

  const backgroundColor1 = computed(() => BACKGROUND_COLORS[theme()].background1);
  const backgroundColor2 = computed(() => BACKGROUND_COLORS[theme()].background2);

  const isDark = (e: MediaQueryListEvent) => {
    theme.set(e.matches ? 'dark' : 'light');
  };

  const hex2rgb = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
  };

  const rgbToHex = (r: number, g: number, b: number) => {
    return '#' + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
  };

  const getGradients = (start: string, end: string, steps: number): string[] => {
    const startColor = hex2rgb(start);
    const endColor = hex2rgb(end);
    const gradients = [];
    for (let i = 0; i < steps; i++) {
      const r = Math.floor(startColor.r + (endColor.r - startColor.r) * (i / (steps - 1)));
      const g = Math.floor(startColor.g + (endColor.g - startColor.g) * (i / (steps - 1)));
      const b = Math.floor(startColor.b + (endColor.b - startColor.b) * (i / (steps - 1)));
      gradients.push(rgbToHex(r, g, b));
    }
    return gradients;
  };

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', isDark);
  inject(DestroyRef).onDestroy(() =>
    window.matchMedia('(prefers-color-scheme: dark').removeEventListener('change', isDark),
  );

  return {
    theme,
    backgroundColor1,
    backgroundColor2,
    getGradients,
  };
}
