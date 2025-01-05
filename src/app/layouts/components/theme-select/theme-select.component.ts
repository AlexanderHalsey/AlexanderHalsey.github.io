import {
  AfterViewInit,
  Component,
  computed,
  Signal,
  signal,
  TemplateRef,
  viewChildren,
} from '@angular/core';

import { DropdownMenuComponent } from '@/components/dropdown-menu/dropdown-menu.component';

import { ComputerIconComponent } from '@/assets/topbar-icons/computer-icon.component';
import { DayIconComponent } from '@/assets/topbar-icons/day-icon.component';
import { NightIconComponent } from '@/assets/topbar-icons/night-icon.component';

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
export class ThemeSelectComponent implements AfterViewInit {
  theme: Signal<Theme>;
  icons = viewChildren<TemplateRef<HTMLElement>>('icon');

  themeOptions = signal<readonly ThemeOption[]>([]);
  constructor(private themeService: ThemeService) {
    this.theme = themeService.get('theme');
  }

  ngAfterViewInit() {
    this.themeOptions.set([
      { id: 'light', label: $localize`Light`, icon: this.icons()[0] },
      { id: 'dark', label: $localize`Dark`, icon: this.icons()[1] },
      { id: 'system', label: $localize`System`, icon: this.icons()[2] },
    ]);
  }

  activeTheme = signal<string>(localStorage.getItem('theme') ?? 'system');
  themeOption = computed(() => {
    console.log(this.themeOptions().find((option) => option.id === this.activeTheme()));
    return this.themeOptions().find((option) => option.id === this.activeTheme());
  });

  activatorColor = signal<string>(
    window.getComputedStyle(document.body).getPropertyValue('--color-primary'),
  );

  setTheme = (themeOption: ThemeOption) => {
    this.themeService.setTheme(themeOption.id);
    this.activeTheme.set(themeOption.id);
  };
}
