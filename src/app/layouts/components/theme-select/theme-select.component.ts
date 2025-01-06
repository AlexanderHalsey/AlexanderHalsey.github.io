import {
  AfterViewInit,
  Component,
  computed,
  OnDestroy,
  Signal,
  signal,
  TemplateRef,
  viewChildren,
} from '@angular/core';

import { DropdownMenuComponent } from '@/components/dropdown-menu/dropdown-menu.component';

import { ComputerIconComponent } from '@/assets/icons/computer-icon.component';
import { DayIconComponent } from '@/assets/icons/day-icon.component';
import { NightIconComponent } from '@/assets/icons/night-icon.component';

import { Theme, ThemeOrSystem, ThemeService } from '@/services/theme.service';

interface ThemeOption {
  id: ThemeOrSystem;
  label: string;
  icon?: TemplateRef<HTMLElement>;
}

@Component({
  selector: 'app-theme-select',
  imports: [ComputerIconComponent, DayIconComponent, DropdownMenuComponent, NightIconComponent],
  templateUrl: './theme-select.component.html',
})
export class ThemeSelectComponent implements AfterViewInit, OnDestroy {
  theme: Signal<Theme>;
  icons = viewChildren<TemplateRef<HTMLElement>>('icon');

  themeOptions = signal<readonly ThemeOption[]>([]);

  constructor(private themeService: ThemeService) {
    this.theme = themeService.get('theme');

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', this.onSystemChange);
  }

  ngAfterViewInit() {
    this.themeOptions.set([
      { id: 'light', label: $localize`Light`, icon: this.icons()[0] },
      { id: 'dark', label: $localize`Dark`, icon: this.icons()[1] },
      { id: 'system', label: $localize`System`, icon: this.icons()[2] },
    ]);
  }

  ngOnDestroy() {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .removeEventListener('change', this.onSystemChange);
  }

  onSystemChange = () => this.setTheme('system');

  activeTheme = signal<string>(localStorage.getItem('theme') ?? 'system');
  themeOption = computed(() => {
    return this.themeOptions().find((option) => option.id === this.activeTheme());
  });

  activatorColor = signal<string>(
    window.getComputedStyle(document.body).getPropertyValue('--color-primary'),
  );

  setTheme = (theme: ThemeOrSystem) => {
    this.themeService.setTheme(theme);
    this.activeTheme.set(theme);
  };
}
