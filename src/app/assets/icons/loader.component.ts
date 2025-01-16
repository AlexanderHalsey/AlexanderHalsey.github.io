import { Component, input } from '@angular/core';

import { IconComponentDefinition } from '@/models/Icon';

@Component({
  selector: 'app-loader-icon',
  template: `
    <svg
      [attr.fill]="color()"
      [attr.width]="size()"
      [attr.height]="size()"
      class="animate-spin"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M12 3a9 9 0 0 1 9 9h-2a7 7 0 0 0-7-7V3z" />
      </g>
    </svg>
  `,
})
export class LoaderIconComponent implements IconComponentDefinition {
  size = input.required<string | number>();
  color = input.required<string>();
}
