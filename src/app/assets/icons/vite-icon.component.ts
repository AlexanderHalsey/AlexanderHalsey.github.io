import { Component, input } from '@angular/core';

import { IconComponentDefinition } from '@/models';

@Component({
  selector: 'app-vite-icon',
  template: `
    @if (animateOnHover()) {
      <svg
        [attr.width]="size()"
        [attr.height]="size()"
        viewBox="0 0 30 30"
        transform="
          translate(-2.75 -2.2)
          scale(1.068)
        "
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <title>file_type_vite</title>
        <path
          d="M29.8836 6.146L16.7418 29.6457c-.2714.4851-.9684.488-1.2439.0052L2.0956 6.1482c-.3-.5262.1498-1.1635.746-1.057l13.156 2.3516a.7144.7144 0 00.2537-.0004l12.8808-2.3478c.5942-.1083 1.0463.5241.7515 1.0513z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M22.2644 2.0069l-9.7253 1.9056a.3571.3571 0 00-.2879.3294l-.5982 10.1038c-.014.238.2045.4227.4367.3691l2.7077-.6248c.2534-.0585.4823.1647.4302.4194l-.8044 3.9393c-.0542.265.1947.4918.4536.4132l1.6724-.5082c.2593-.0787.5084.1487.4536.414l-1.2784 6.1877c-.08.387.4348.598.6495.2662L16.5173 25 24.442 9.1848c.1327-.2648-.096-.5667-.387-.5106l-2.787.5379c-.262.0505-.4848-.1934-.4109-.4497l1.8191-6.306c.074-.2568-.1496-.5009-.4118-.4495z"
          fill="url(#paint1_linear)"
        />
        <defs id="defs50">
          <linearGradient
            id="paint0_linear"
            x1="6.0002"
            y1="32.9999"
            x2="235"
            y2="344"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(.07142 0 0 .07142 1.3398 1.8944)"
          >
            <stop stop-color="#41D1FF" id="stop38" />
            <stop offset="1" stop-color="#BD34FE" id="stop40" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="194.651"
            y1="8.8182"
            x2="236.076"
            y2="292.989"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(.07142 0 0 .07142 1.3398 1.8944)"
          >
            <stop stop-color="#FFEA83" id="stop43" />
            <stop offset=".0833" stop-color="#FFDD35" id="stop45" />
            <stop offset="1" stop-color="#FFA800" id="stop47" />
          </linearGradient>
        </defs>
      </svg>
    } @else {
      <svg
        role="img"
        [attr.width]="size()"
        [attr.height]="size()"
        [attr.fill]="color()"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Vite</title>
        <path
          d="m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355l-1.433.435a.306.306 0 0 1-.389-.354l.69-3.375a.306.306 0 0 0-.37-.36l-2.32.536a.306.306 0 0 1-.374-.316zm14.976-7.926L17.284 3.74l-.544 1.887 2.077-.4a.8.8 0 0 1 .84.369.8.8 0 0 1 .034.783L12.9 19.93l-.013.025-.015.023-.122.19a.801.801 0 0 1-.672.37.826.826 0 0 1-.634-.302.8.8 0 0 1-.16-.67l1.029-4.981-1.12.34a.81.81 0 0 1-.86-.262.802.802 0 0 1-.165-.67l.63-3.08-2.027.468a.808.808 0 0 1-.768-.233.81.81 0 0 1-.217-.6l.389-6.57-7.44-1.33a.612.612 0 0 0-.64.906L11.58 23.691a.612.612 0 0 0 1.066-.004l11.26-20.135a.612.612 0 0 0-.644-.9z"
        />
      </svg>
    }
  `,
})
export class ViteIconComponent implements IconComponentDefinition {
  size = input.required<string | number>();
  color = input.required<string>();
  animateOnHover = input<boolean>();
}
