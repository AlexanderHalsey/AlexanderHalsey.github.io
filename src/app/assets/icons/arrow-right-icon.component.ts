import { Component, computed, Signal } from '@angular/core';

import { Theme, ThemeService } from '@/services/theme.service';

@Component({
  selector: 'app-arrow-right-icon',
  template: `
    <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        [attr.fill]="color()"
      />
      <path
        d="M11.0303 8.46967C10.7374 8.17678 10.2626 8.17678 9.96967 8.46967C9.67678 8.76256 9.67678 9.23744 9.96967 9.53033L12.4393 12L9.96967 14.4697C9.67678 14.7626 9.67678 15.2374 9.96967 15.5303C10.2626 15.8232 10.7374 15.8232 11.0303 15.5303L14.0303 12.5303C14.3232 12.2374 14.3232 11.7626 14.0303 11.4697L11.0303 8.46967Z"
        fill="#000000"
      />
    </svg>
  `,
  host: { class: '[&>svg]:w-6 [&>svg]:h-6' },
})
export class ArrowRightIconComponent {
  theme: Signal<Theme>;
  constructor(private themeService: ThemeService) {
    this.theme = themeService.get('theme');
  }

  color = computed(() => (this.theme() === 'light' ? '#e5e7eb' : '#9ca3af'));
}
