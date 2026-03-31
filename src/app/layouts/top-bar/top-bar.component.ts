import { AfterViewInit, Component, inject, PLATFORM_ID, signal, Signal } from '@angular/core';
import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';

import { HamburgerMenuComponent } from '../components/hamburger-menu/hamburger-menu.component';
import { LanguageSelectComponent } from '../components/language-select/language-select.component';
import { ThemeSelectComponent } from '../components/theme-select/theme-select.component';

import { DisplayService } from '@/services/display.service';

import { prefersReducedMotion } from '@/helpers/match-media.helper';

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
export class TopBarComponent implements AfterViewInit {
  private platformId = inject(PLATFORM_ID);
  isMobile: Signal<boolean>;
  isTop = signal(true);
  constructor(private displayService: DisplayService) {
    this.isMobile = displayService.get('isMobile');
  }

  selectorItems: SelectorItem[] = [
    { selector: '#about-me', label: $localize`About me` },
    { selector: '#experience', label: $localize`Experience` },
    { selector: '#projects', label: $localize`Projects` },
    { selector: '#skills :first-child', label: $localize`Skills` },
    { selector: '#contact', label: $localize`Contact` },
  ];

  scrollTo = (selector: string) => {
    const element = document.querySelector(selector);
    if (!element) {
      throw new Error(`Element with selector ${selector} not found`);
    }
    const yOffset = -104;
    const top = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({
      behavior: prefersReducedMotion ? 'instant' : 'smooth',
      top,
    });
  };

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      this.isTop.set(scrollTop < 50);
    });
  }
}
