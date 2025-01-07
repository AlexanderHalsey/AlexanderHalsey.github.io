import { Component, input } from '@angular/core';

import { IconComponentDefinition } from '@/models';

@Component({
  selector: 'app-vue-icon',
  template: `
    @if (animateOnHover()) {
      <svg
        [attr.width]="size()"
        [attr.height]="size()"
        viewBox="0 0 64 64"
        transform="
          scale(1.14, 1.14)
        "
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xml:space="preserve"
        xmlns:serif="http://www.serif.com/"
        style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
      >
        <path
          d="M17.595,11.204l8.91,0l5.536,9.391l5.591,-9.391l8.831,0l-14.422,25.359l-14.446,-25.359Z"
          style="fill:#435466;"
        />

        <path
          d="M8.089,11.204l23.952,41.845l24.126,-41.845l-9.704,0l-14.422,25.359l-14.446,-25.359l-9.506,0Z"
          style="fill:#4dba87;"
        />
      </svg>
    } @else {
      <svg
        [attr.fill]="color()"
        [attr.width]="size()"
        [attr.height]="size()"
        viewBox="0 0 14 14"
        role="img"
        focusable="false"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m 10.5985,1.80525 0.0015,-0.003 -2.2125,0 -1.3875,2.399 0,0.001 -1.386,-2.4 -2.2125,0 0,0.0025 -2.4015,0 6,10.393 6,-10.3925"
        />
      </svg>
    }
  `,
})
export class VueIconComponent implements IconComponentDefinition {
  size = input.required<string | number>();
  color = input.required<string>();
  animateOnHover = input<boolean>();
}
