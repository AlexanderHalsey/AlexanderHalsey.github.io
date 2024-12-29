import { Component, signal } from '@angular/core';

import { DropdownMenuComponent } from '@/components/dropdown-menu/dropdown-menu.component';
import { MenuItem } from '@/models';

@Component({
  selector: 'app-theme-select',
  imports: [DropdownMenuComponent],
  templateUrl: './theme-select.component.html',
  styleUrl: './theme-select.component.css',
})
export class ThemeSelectComponent {
  themes: MenuItem[] = [
    { label: $localize`Light` },
    { label: $localize`Dark` },
    { label: $localize`System` },
  ];

  activeTheme = signal<string>(this.themes[2].label);

  setTheme = (theme: MenuItem) => {
    this.activeTheme.set(theme.label);
  };
}
