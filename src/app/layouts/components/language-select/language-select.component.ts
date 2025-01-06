import { Component, signal } from '@angular/core';

import { DropdownMenuComponent } from '@/shared/components/dropdown-menu/dropdown-menu.component';
import { MenuItem } from '@/models';

@Component({
  selector: 'app-language-select',
  imports: [DropdownMenuComponent],
  templateUrl: './language-select.component.html',
})
export class LanguageSelectComponent {
  activeLanguage = signal<string>(navigator.language);

  languages: MenuItem[] = [{ label: 'English' }, { label: 'Français' }, { label: 'Español' }];

  setLanguage = (language: MenuItem) => {
    this.activeLanguage.set(language.label);
  };
}
