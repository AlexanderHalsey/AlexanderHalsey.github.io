import { Component, computed, inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { DropdownMenuComponent } from '@/shared/components/dropdown-menu/dropdown-menu.component';

import { MenuItem } from '@/models';

type LanguageMenuItem = MenuItem & { code: string; pathname: string };

@Component({
  selector: 'app-language-select',
  imports: [DropdownMenuComponent],
  templateUrl: './language-select.component.html',
})
export class LanguageSelectComponent {
  private platformId = inject(PLATFORM_ID);

  languageOptions: LanguageMenuItem[] = [
    { code: 'en', label: 'English', pathname: '/en' },
    { code: 'fr', label: 'Français', pathname: '/fr' },
    { code: 'es', label: 'Español', pathname: '/es' },
  ];

  activeLanguageCode = signal<string | undefined>(
    isPlatformBrowser(this.platformId)
      ? this.languageOptions.find((option) => location.pathname.startsWith(option.pathname))?.code
      : undefined,
  );

  languageOption = computed(
    () =>
      this.languageOptions.find((language) => language.code === this.activeLanguageCode()) ??
      this.languageOptions[0],
  );

  setLanguage = (languageOption: LanguageMenuItem) => {
    if (languageOption.pathname !== location.pathname) {
      location.href = location.origin + languageOption.pathname;
    }
  };
}
