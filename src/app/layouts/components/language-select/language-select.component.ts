import { Component, computed, signal } from '@angular/core';

import { DropdownMenuComponent } from '@/shared/components/dropdown-menu/dropdown-menu.component';

import { languageOptions } from '@/helpers/language.helper';

import { MenuItem } from '@/models';

type LanguageMenuItem = MenuItem & { code: string; pathname: string };

@Component({
  selector: 'app-language-select',
  imports: [DropdownMenuComponent],
  templateUrl: './language-select.component.html',
})
export class LanguageSelectComponent {
  languageOptions = languageOptions;
  activeLanguageCode = signal<string | undefined>(
    this.languageOptions.find((option) => option.pathname === location.pathname)?.code,
  );

  languageOption = computed(() => {
    return (
      this.languageOptions.find((language) => language.code === this.activeLanguageCode()) ??
      this.languageOptions[0]
    );
  });

  setLanguage = (languageOption: LanguageMenuItem) => {
    if (languageOption.pathname !== location.pathname) {
      location.href = location.origin + languageOption.pathname;
    }
  };
}
