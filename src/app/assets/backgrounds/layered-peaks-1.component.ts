import { Component, computed } from '@angular/core';

import { useTheme } from '@/composables/theme.composable';

@Component({
  selector: 'app-layered-peaks-1',
  template: `
    <svg
      id="visual"
      viewBox="0 0 1500 300"
      width="1500"
      height="300"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
    >
      <path
        d="M0 73L188 189L375 74L563 125L750 70L938 188L1125 128L1313 163L1500 51L1500 301L1313 301L1125 301L938 301L750 301L563 301L375 301L188 301L0 301Z"
        [attr.fill]="colors()[0]"
      ></path>
      <path
        d="M0 103L188 148L375 121L563 101L750 171L938 135L1125 159L1313 102L1500 92L1500 301L1313 301L1125 301L938 301L750 301L563 301L375 301L188 301L0 301Z"
        [attr.fill]="colors()[1]"
      ></path>
      <path
        d="M0 154L188 137L375 196L563 234L750 183L938 222L1125 206L1313 191L1500 141L1500 301L1313 301L1125 301L938 301L750 301L563 301L375 301L188 301L0 301Z"
        [attr.fill]="colors()[2]"
      ></path>
      <path
        d="M0 232L188 238L375 187L563 196L750 217L938 184L1125 192L1313 177L1500 213L1500 301L1313 301L1125 301L938 301L750 301L563 301L375 301L188 301L0 301Z"
        [attr.fill]="colors()[3]"
      ></path>
      <path
        d="M0 265L188 261L375 236L563 254L750 262L938 276L1125 274L1313 254L1500 269L1500 301L1313 301L1125 301L938 301L750 301L563 301L375 301L188 301L0 301Z"
        [attr.fill]="colors()[4]"
      ></path>
    </svg>
  `,
})
export class LayeredPeaks1Component {
  theme = useTheme();

  startColor = computed(() => (this.theme.theme() === 'light' ? '#f58b40' : '#bd5d19'));
  colors = computed(() =>
    this.theme.getGradients(this.startColor(), this.theme.backgroundColor1(), 5),
  );
}
