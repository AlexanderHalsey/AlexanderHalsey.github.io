import { Component } from '@angular/core';

import { HamburgerMenuComponent } from '../components/hamburger-menu/hamburger-menu.component';
import { LanguageSelectComponent } from '../components/language-select/language-select.component';
import { ThemeSelectComponent } from '../components/theme-select/theme-select.component';

import { useDisplay } from '@/composables/display.composable';

import type { SelectorItem } from '@/models';

@Component({
  selector: 'app-top-bar',
  imports: [HamburgerMenuComponent, LanguageSelectComponent, ThemeSelectComponent],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css',
})
export class TopBarComponent {
  display = useDisplay();

  selectorItems: SelectorItem[] = [
    { selector: '#aboutMe', label: $localize`About Me` },
    { selector: '#experience', label: $localize`Experience` },
    { selector: '#skills', label: $localize`Skills` },
    { selector: '#contact', label: $localize`Contact` },
  ];

  scrollTo = (menuItem: SelectorItem) => {
    const element = document.querySelector(menuItem.selector);
    if (!element) {
      throw new Error(`Element with selector ${menuItem.selector} not found`);
    }
    const yOffset = -15;
    const top = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ behavior: 'smooth', top });
  };
}
