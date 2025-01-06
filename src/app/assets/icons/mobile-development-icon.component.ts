import { Component, computed, Signal } from '@angular/core';

import { Theme, ThemeService } from '@/services/theme.service';

@Component({
  selector: 'app-mobile-development-icon',
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
        d="M12 9L10 12H14L12 15M9.2 21H14.8C15.9201 21 16.4802 21 16.908 20.782C17.2843 20.5903 17.5903 20.2843 17.782 19.908C18 19.4802 18 18.9201 18 17.8V6.2C18 5.0799 18 4.51984 17.782 4.09202C17.5903 3.71569 17.2843 3.40973 16.908 3.21799C16.4802 3 15.9201 3 14.8 3H9.2C8.0799 3 7.51984 3 7.09202 3.21799C6.71569 3.40973 6.40973 3.71569 6.21799 4.09202C6 4.51984 6 5.07989 6 6.2V17.8C6 18.9201 6 19.4802 6.21799 19.908C6.40973 20.2843 6.71569 20.5903 7.09202 20.782C7.51984 21 8.07989 21 9.2 21Z"
        [attr.stroke]="color()"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `,
  host: { class: '[&>svg]:w-10 [&>svg]:h-10' },
})
export class MobileDevelopmentIconComponent {
  theme: Signal<Theme>;
  constructor(private themeService: ThemeService) {
    this.theme = themeService.get('theme');
  }

  color = computed(() => (this.theme() === 'light' ? '#000000' : '#ffffff'));
}
