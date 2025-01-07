import { Component, input } from '@angular/core';

import { IconComponentDefinition } from '@/models';

@Component({
  selector: 'app-tailwindcss-icon',
  template: `
    @if (animateOnHover()) {
      <svg
        [attr.width]="size()"
        [attr.height]="size()"
        transform="
          scale(0.95, 0.95)
          translate(0, -1)
        "
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>file_type_tailwind</title>
        <path
          d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
          style="fill:#44a8b3"
        />
      </svg>
    } @else {
      <svg
        [attr.fill]="color()"
        [attr.width]="size()"
        [attr.height]="size()"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        xml:space="preserve"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"
        />
      </svg>
    }
  `,
})
export class TailwindcssIconComponent implements IconComponentDefinition {
  size = input.required<string | number>();
  color = input.required<string>();
  animateOnHover = input<boolean>();
}
