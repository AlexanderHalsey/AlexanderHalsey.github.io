import { Component, input } from '@angular/core';

@Component({
  selector: 'app-e2e-testing-icon',
  template: `
    <svg
      [attr.width]="size() + 'px'"
      [attr.height]="size() + 'px'"
      viewBox="0 0 24 24"
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      [attr.stroke]="color()"
      fill="none"
    >
      <defs>
        <style>
          .cls-1 {
            stroke-miterlimit: 10;
            stroke-width: 1.91px;
          }
        </style>
      </defs>
      <line class="cls-1" x1="3.43" y1="1.5" x2="12.02" y2="1.5" />
      <path
        class="cls-1"
        d="M17.75,9.14h3.82a0,0,0,0,1,0,0V20.59a1.91,1.91,0,0,1-1.91,1.91h0a1.91,1.91,0,0,1-1.91-1.91V9.14A0,0,0,0,1,17.75,9.14Z"
      />
      <line class="cls-1" x1="15.84" y1="9.14" x2="23.48" y2="9.14" />
      <path class="cls-1" d="M10.11,10.57V1.5H5.34v9.07a6.21,6.21,0,1,0,4.77,0Z" />
      <line class="cls-1" x1="2.48" y1="13.91" x2="12.98" y2="13.91" />
      <line class="cls-1" x1="8.2" y1="18.68" x2="10.11" y2="18.68" />
      <line class="cls-1" x1="4.39" y1="16.77" x2="6.3" y2="16.77" />
    </svg>
  `,
})
export class E2ETestingIconComponent {
  size = input.required<string | number>();
  color = input.required<string>();
}
