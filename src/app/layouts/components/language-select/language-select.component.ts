import { Component, signal } from '@angular/core';

import { DropdownMenuComponent } from '@/shared/components/dropdown-menu/dropdown-menu.component';
import { MenuItem } from '@/models';

@Component({
  selector: 'app-language-select',
  imports: [DropdownMenuComponent],
  templateUrl: './language-select.component.html',
  styleUrl: './language-select.component.css',
})
export class LanguageSelectComponent {
  activeLanguage = signal<string>(navigator.language);

  languages: MenuItem[] = [
    { label: $localize`English` },
    { label: $localize`Spanish` },
    { label: $localize`French` },
  ];

  setLanguage = (language: MenuItem) => {
    this.activeLanguage.set(language.label);
  };
}
