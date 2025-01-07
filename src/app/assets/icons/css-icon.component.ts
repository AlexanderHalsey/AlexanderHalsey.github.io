import { Component, input } from '@angular/core';

import { IconComponentDefinition } from '@/models';

@Component({
  selector: 'app-css-icon',
  template: `
    @if (animateOnHover()) {
      <svg
        [attr.width]="size()"
        [attr.height]="size()"
        viewBox="0 0 32 32"
        transform="scale(1.06, 1.07)"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>file_type_css</title>
        <polygon
          points="5.902 27.201 3.656 2 28.344 2 26.095 27.197 15.985 30 5.902 27.201"
          style="fill:#1572b6"
        />
        <polygon
          points="16 27.858 24.17 25.593 26.092 4.061 16 4.061 16 27.858"
          style="fill:#33a9dc"
        />
        <polygon
          points="16 13.191 20.09 13.191 20.372 10.026 16 10.026 16 6.935 16.011 6.935 23.75 6.935 23.676 7.764 22.917 16.282 16 16.282 16 13.191"
          style="fill:#fff"
        />
        <polygon
          points="16.019 21.218 16.005 21.222 12.563 20.292 12.343 17.827 10.67 17.827 9.24 17.827 9.673 22.68 16.004 24.438 16.019 24.434 16.019 21.218"
          style="fill:#ebebeb"
        />
        <polygon
          points="19.827 16.151 19.455 20.29 16.008 21.22 16.008 24.436 22.344 22.68 22.391 22.158 22.928 16.151 19.827 16.151"
          style="fill:#fff"
        />
        <polygon
          points="16.011 6.935 16.011 8.855 16.011 10.018 16.011 10.026 8.555 10.026 8.555 10.026 8.545 10.026 8.483 9.331 8.342 7.764 8.268 6.935 16.011 6.935"
          style="fill:#ebebeb"
        />
        <polygon
          points="16 13.191 16 15.111 16 16.274 16 16.282 12.611 16.282 12.611 16.282 12.601 16.282 12.539 15.587 12.399 14.02 12.325 13.191 16 13.191"
          style="fill:#ebebeb"
        />
      </svg>
    } @else {
      <svg
        [attr.fill]="color()"
        [attr.width]="size()"
        [attr.height]="size()"
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>css3</title>
        <path
          d="M24.235 6.519l-16.47-0.004 0.266 3.277 12.653 0.002-0.319 3.394h-8.298l0.3 3.215h7.725l-0.457 4.403-3.636 1.005-3.694-1.012-0.235-2.637h-3.262l0.362 4.817 6.829 2.128 6.714-1.912 1.521-16.675zM2.879 1.004h26.242l-2.387 26.946-10.763 3.045-10.703-3.047z"
        ></path>
      </svg>
    }
  `,
})
export class CssIconComponent implements IconComponentDefinition {
  size = input.required<string | number>();
  color = input.required<string>();
  animateOnHover = input<boolean>();
}
