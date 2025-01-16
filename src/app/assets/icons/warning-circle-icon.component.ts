import { Component, input } from '@angular/core';

import { IconComponentDefinition } from '@/models/Icon';

@Component({
  selector: 'app-warning-circle-icon',
  template: `
    <svg
      [attr.fill]="color()"
      [attr.width]="size()"
      [attr.height]="size()"
      viewBox="-1.7 0 20.4 20.4"
      xmlns="http://www.w3.org/2000/svg"
      class="cf-icon-svg"
    >
      <path
        d="M16.406 10.283a7.917 7.917 0 1 1-7.917-7.917 7.916 7.916 0 0 1 7.917 7.917zM9.48 14.367a1.003 1.003 0 1 0-1.004 1.003 1.003 1.003 0 0 0 1.004-1.003zM7.697 11.53a.792.792 0 0 0 1.583 0V5.262a.792.792 0 0 0-1.583 0z"
      />
    </svg>
  `,
})
export class WarningCircleIconComponent implements IconComponentDefinition {
  size = input.required<string | number>();
  color = input.required<string>();
}
