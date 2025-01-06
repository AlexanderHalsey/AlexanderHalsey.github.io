import { Component, computed, OnDestroy, Signal, signal } from '@angular/core';

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
  theme: Signal<Theme>;
  constructor(private themeService: ThemeService) {
    this.theme = themeService.get('theme');
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', this.onSystemChange);
  }

  ngOnDestroy() {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .removeEventListener('change', this.onSystemChange);
  }

  onSystemChange = () => this.setTheme('system');

  activeTheme = signal<string>(localStorage.getItem('theme') ?? 'system');

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
