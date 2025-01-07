import { Component, input } from '@angular/core';

import { IconComponentDefinition } from '@/models';

@Component({
  selector: 'app-npm-icon',
  template: `
    @if (animateOnHover()) {
      <svg
        [attr.width]="size()"
        [attr.height]="size()"
        viewBox="0 0 32 32"
        transform="
          translate(0, -0.75)
          scale(1.05, 1.05)
        "
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>file_type_npm</title>
        <path
          d="M2,10.555H30v9.335H16v1.556H9.778V19.889H2Zm1.556,7.779H6.667V13.666H8.222v4.667H9.778V12.111H3.556Zm7.778-6.223v7.779h3.111V18.334h3.111V12.111Zm3.111,1.556H16v3.112H14.444Zm4.667-1.556v6.223h3.111V13.666h1.556v4.667h1.556V13.666h1.556v4.667h1.556V12.111Z"
          style="fill:#cb3837"
        />
      </svg>
    } @else {
      <svg
        [attr.width]="size()"
        [attr.height]="size()"
        [attr.fill]="color()"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>npm</title>
        <g id="Layer_2" data-name="Layer 2">
          <g id="invisible_box" data-name="invisible box">
            <rect width="48" height="48" fill="none" />
          </g>
          <g id="Q3_icons" data-name="Q3 icons">
            <g>
              <rect x="21.6" y="19.9" width="2.4" height="4.84" />
              <path
                d="M2,15V29.7H14.2v2.5H24V29.7H46V15ZM14.2,27.2H11.8V19.9H9.3v7.3H4.5V17.5h9.7Zm12.3,0H21.6v2.5H16.7V17.5h9.8Zm17.1,0H41.2V19.9H38.7v7.3H36.2V19.9H33.8v7.3H28.9V17.5H43.6Z"
              />
            </g>
          </g>
        </g>
      </svg>
    }
  `,
})
export class NpmIconComponent implements IconComponentDefinition {
  size = input.required<string | number>();
  color = input.required<string>();
  animateOnHover = input<boolean>();
}
