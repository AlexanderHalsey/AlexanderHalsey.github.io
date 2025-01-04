import { Component, computed } from '@angular/core';

import { useTheme } from '@/composables/theme.composable';

@Component({
  selector: 'app-layered-peaks-3',
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
        d="M0 171L188 68L375 149L563 101L750 93L938 179L1125 171L1313 121L1500 142L1500 301L1313 301L1125 301L938 301L750 301L563 301L375 301L188 301L0 301Z"
        [attr.fill]="colors()[0]"
      ></path>
      <path
        d="M0 142L188 136L375 189L563 116L750 186L938 141L1125 197L1313 151L1500 132L1500 301L1313 301L1125 301L938 301L750 301L563 301L375 301L188 301L0 301Z"
        [attr.fill]="colors()[1]"
      ></path>
      <path
        d="M0 172L188 165L375 149L563 220L750 230L938 207L1125 143L1313 137L1500 212L1500 301L1313 301L1125 301L938 301L750 301L563 301L375 301L188 301L0 301Z"
        [attr.fill]="colors()[2]"
      ></path>
      <path
        d="M0 244L188 249L375 198L563 237L750 191L938 235L1125 200L1313 202L1500 239L1500 301L1313 301L1125 301L938 301L750 301L563 301L375 301L188 301L0 301Z"
        [attr.fill]="colors()[3]"
      ></path>
      <path
        d="M0 249L188 233L375 250L563 257L750 241L938 223L1125 249L1313 232L1500 247L1500 301L1313 301L1125 301L938 301L750 301L563 301L375 301L188 301L0 301Z"
        [attr.fill]="colors()[4]"
      ></path>
    </svg>
  `,
})
export class LayeredPeaks3Component {
  theme = useTheme();

  startColor = computed(() => (this.theme.theme() === 'light' ? '#89bff5' : '#2769ab'));
  colors = computed(() =>
    this.theme.getGradients(this.startColor(), this.theme.backgroundColor2(), 5),
  );
}
