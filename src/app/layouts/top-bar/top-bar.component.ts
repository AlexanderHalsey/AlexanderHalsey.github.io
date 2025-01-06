import { Component, Signal } from '@angular/core';

import { HamburgerMenuComponent } from '../components/hamburger-menu/hamburger-menu.component';
import { LanguageSelectComponent } from '../components/language-select/language-select.component';
import { ThemeSelectComponent } from '../components/theme-select/theme-select.component';

import { DisplayService } from '@/services/display.service';
import { ThemeService } from '@/services/theme.service';

import type { SelectorItem } from '@/models';

@Component({
  selector: 'app-top-bar',
  imports: [HamburgerMenuComponent, LanguageSelectComponent, ThemeSelectComponent],
  templateUrl: './top-bar.component.html',
})
export class TopBarComponent {
  isMobile: Signal<boolean>;
  theme: Signal<string>;

  constructor(
    private displayService: DisplayService,
    private themeService: ThemeService,
  ) {
    this.isMobile = displayService.get('isMobile');
    this.theme = themeService.get('theme');
  }

  selectorItems: SelectorItem[] = [
    { selector: '#aboutMe', label: $localize`About me` },
    { selector: '#experience', label: $localize`Experience` },
    { selector: '#skills', label: $localize`Skills` },
    { selector: '#contact', label: $localize`Contact` },
  ];

  scrollTo = (menuItem: SelectorItem) => {
    const element = document.querySelector(menuItem.selector);
    if (!element) {
      throw new Error(`Element with selector ${menuItem.selector} not found`);
    }
    const yOffset = -75;
    const top = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ behavior: 'smooth', top });
  };
}
