import { Component, input } from '@angular/core';

import { IconComponentDefinition } from '@/models/Icon';

@Component({
  selector: 'app-e2e-testing-icon',
  template: `
    <!-- <svg
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
    </svg> -->
    <svg
      [attr.fill]="color()"
      [attr.width]="size() + 'px'"
      [attr.height]="size() + 'px'"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      xml:space="preserve"
    >
      <g>
        <g>
          <path
            d="M466.902,375.706V134.421H303.327V63.867h15.493V32.52h-15.493h-94.654h-15.492v31.347h15.493v70.553H45.098v241.286H0
			V479.48h512V375.706H466.902z M230.693,158.547l9.328-4.13V63.867h31.959v90.549l9.328,4.13
			c11.49,5.088,20.912,13.378,27.415,23.538H203.278C209.781,171.924,219.203,163.633,230.693,158.547z M193.439,213.433h125.123
			c0.029,0.79,0.046,1.582,0.046,2.377c0,34.521-28.086,62.607-62.608,62.607s-62.607-28.086-62.607-62.607
			C193.393,215.015,193.41,214.222,193.439,213.433z M76.445,165.768h100.068c-9.259,14.7-14.468,31.964-14.468,50.043
			c0,51.806,42.148,93.954,93.954,93.954c51.807,0,93.955-42.148,93.955-93.954c0-18.078-5.209-35.343-14.468-50.043h100.068
			v209.711H76.445V165.768z M480.653,448.133H31.347v-41.08h449.306V448.133z"
          />
        </g>
      </g>
      <g>
        <g>
          <rect x="245.154" y="416.758" width="21.682" height="21.682" />
        </g>
      </g>
    </svg>
  `,
})
export class E2ETestingIconComponent implements IconComponentDefinition {
  size = input.required<string | number>();
  color = input.required<string>();
}
