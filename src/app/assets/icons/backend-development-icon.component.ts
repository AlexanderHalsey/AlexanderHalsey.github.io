import { Component, input } from '@angular/core';

import { IconComponentDefinition } from '@/models/Icon';

@Component({
  selector: 'app-backend-development-icon',
  template: `
    <svg
      [attr.fill]="color()"
      [attr.width]="size() + 'px'"
      [attr.height]="size() + 'px'"
      viewBox="0 0 32 32"
      id="icon"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>datastore</title>
      <circle cx="23" cy="23" r="1" />
      <rect x="8" y="22" width="12" height="2" />
      <circle cx="23" cy="9" r="1" />
      <rect x="8" y="8" width="12" height="2" />
      <path
        d="M26,14a2,2,0,0,0,2-2V6a2,2,0,0,0-2-2H6A2,2,0,0,0,4,6v6a2,2,0,0,0,2,2H8v4H6a2,2,0,0,0-2,2v6a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V20a2,2,0,0,0-2-2H24V14ZM6,6H26v6H6ZM26,26H6V20H26Zm-4-8H10V14H22Z"
      />
    </svg>
  `,
})
export class BackendDevelopmentIconComponent implements IconComponentDefinition {
  size = input.required<string | number>();
  color = input.required<string>();
}
