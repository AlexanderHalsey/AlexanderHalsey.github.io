import { Component, input } from '@angular/core';

import { IconComponentDefinition } from '@/models';

@Component({
  selector: 'app-close-icon',
  template: `
    <svg
      [attr.width]="size()"
      [attr.height]="size()"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Menu / Close_MD">
        <path
          id="Vector"
          d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
          [attr.stroke]="color()"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  `,
})
export class CloseIconComponent implements IconComponentDefinition {
  size = input.required<string | number>();
  color = input.required<string>();
}
