import { Component, computed, Signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import { ThemeService } from '@/services/theme.service';

@Component({
  selector: 'app-about-me',
  imports: [NgOptimizedImage],
  templateUrl: './about-me.component.html',
})
export class AboutMeComponent {
  theme: Signal<string>;
  backgroundColor: Signal<string>;
  constructor(private themeService: ThemeService) {
    this.theme = themeService.get('theme');
    this.backgroundColor = computed(() => themeService.backgroundColors().background1);
  }
}
