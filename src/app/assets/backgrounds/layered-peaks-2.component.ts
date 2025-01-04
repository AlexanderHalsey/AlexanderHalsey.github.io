import { Component, computed } from '@angular/core';

import { useTheme } from '@/composables/theme.composable';

@Component({
  selector: 'app-layered-peaks-2',
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
        d="M0 128L188 108L375 169L563 133L750 194L938 149L1125 114L1313 115L1500 216L1500 0L1313 0L1125 0L938 0L750 0L563 0L375 0L188 0L0 0Z"
        [attr.fill]="colors()[0]"
      ></path>
      <path
        d="M0 174L188 121L375 123L563 94L750 152L938 171L1125 127L1313 100L1500 178L1500 0L1313 0L1125 0L938 0L750 0L563 0L375 0L188 0L0 0Z"
        [attr.fill]="colors()[1]"
      ></path>
      <path
        d="M0 161L188 119L375 142L563 116L750 103L938 67L1125 70L1313 120L1500 65L1500 0L1313 0L1125 0L938 0L750 0L563 0L375 0L188 0L0 0Z"
        [attr.fill]="colors()[2]"
      ></path>
      <path
        d="M0 51L188 113L375 91L563 64L750 101L938 81L1125 61L1313 46L1500 64L1500 0L1313 0L1125 0L938 0L750 0L563 0L375 0L188 0L0 0Z"
        [attr.fill]="colors()[3]"
      ></path>
      <path
        d="M0 46L188 55L375 45L563 36L750 70L938 31L1125 67L1313 46L1500 48L1500 0L1313 0L1125 0L938 0L750 0L563 0L375 0L188 0L0 0Z"
        [attr.fill]="colors()[4]"
      ></path>
    </svg>
  `,
})
export class LayeredPeaks2Component {
  theme = useTheme();

  startColor = computed(() => (this.theme.theme() === 'light' ? '#e39ac8' : '#702e58'));
  colors = computed(() =>
    this.theme.getGradients(this.startColor(), this.theme.backgroundColor1(), 5),
  );
}
