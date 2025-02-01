import { Component, Signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import { HamburgerMenuComponent } from '../components/hamburger-menu/hamburger-menu.component';
import { LanguageSelectComponent } from '../components/language-select/language-select.component';
import { ThemeSelectComponent } from '../components/theme-select/theme-select.component';

import { DisplayService } from '@/services/display.service';

import type { SelectorItem } from '@/models';

@Component({
  selector: 'app-top-bar',
  imports: [
    HamburgerMenuComponent,
    LanguageSelectComponent,
    NgOptimizedImage,
    ThemeSelectComponent,
  ],
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css', '../../shared/components/button/button.component.css'],
})
export class TopBarComponent {
  isMobile: Signal<boolean>;
  constructor(private displayService: DisplayService) {
    this.isMobile = displayService.get('isMobile');
  }

  selectorItems: SelectorItem[] = [
    { selector: '#about-me', label: $localize`About me` },
    { selector: '#experience', label: $localize`Experience` },
    { selector: '#skills', label: $localize`Skills` },
    { selector: '#contact', label: $localize`Contact` },
  ];

  scrollTo = (selector: string) => {
    const element = document.querySelector(selector);
    if (!element) {
      throw new Error(`Element with selector ${selector} not found`);
    }
    const yOffset = -104;
    const top = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ behavior: 'smooth', top });
  };
}
