import { Component, computed, Signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import { CardComponent } from '@/shared/components/card/card.component';

import { Theme, ThemeService } from '@/services/theme.service';

@Component({
  selector: 'app-about-me',
  imports: [NgOptimizedImage, CardComponent],
  templateUrl: './about-me.component.html',
})
export class AboutMeComponent {
  theme: Signal<Theme>;
  backgroundColor: Signal<string>;
  constructor(private themeService: ThemeService) {
    this.theme = themeService.get('theme');
    this.backgroundColor = computed(() => themeService.backgroundColors().background1);
  }
}
