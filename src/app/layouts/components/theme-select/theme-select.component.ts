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
  activeTheme = signal<string>('System');

  themes: MenuItem[] = [{ label: 'Light' }, { label: 'Dark' }, { label: 'System' }];

  setTheme = (theme: MenuItem) => {
    this.activeTheme.set(theme.label);
  };
}
