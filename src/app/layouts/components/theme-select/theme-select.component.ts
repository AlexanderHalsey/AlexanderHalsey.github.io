import { Component, computed, inject, OnDestroy, PLATFORM_ID, Signal, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { DropdownMenuComponent } from '@/components/dropdown-menu/dropdown-menu.component';
import { IconComponent } from '@/components/icon/icon.component';

import { ThemeService } from '@/services/theme.service';

import { Theme, ThemeOption, ThemeOrSystem } from '@/models';

@Component({
  selector: 'app-theme-select',
  imports: [IconComponent, DropdownMenuComponent],
  templateUrl: './theme-select.component.html',
})
export class ThemeSelectComponent implements OnDestroy {
  private platformId = inject(PLATFORM_ID);
  theme: Signal<Theme>;
  constructor(private themeService: ThemeService) {
    this.theme = themeService.get('theme');
    if (isPlatformBrowser(this.platformId)) {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', this.onSystemChange);
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', this.onSystemChange);
    }
  }

  onSystemChange = () => this.setTheme('system');

  activeTheme = signal<string>(
    isPlatformBrowser(this.platformId) ? (localStorage.getItem('theme') ?? 'system') : 'system',
  );

  themeOptions = [
    { id: 'light', label: $localize`Light`, icon: { name: 'day' } },
    { id: 'dark', label: $localize`Dark`, icon: { name: 'night' } },
    { id: 'system', label: $localize`System`, icon: { name: 'computer' } },
  ] as const satisfies ThemeOption[];

  themeOption = computed(() => {
    return this.themeOptions.find((option) => option.id === this.activeTheme());
  });

  setTheme = (theme: ThemeOrSystem) => {
    this.themeService.setTheme(theme);
    this.activeTheme.set(theme);
  };
}
