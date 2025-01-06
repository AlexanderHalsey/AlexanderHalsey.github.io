import { Component, Signal } from '@angular/core';

import { ThemeService } from '@/services/theme.service';

import { Theme } from '@/models';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
})
export class CardComponent {
  theme: Signal<Theme>;
  constructor(private themeService: ThemeService) {
    this.theme = themeService.get('theme');
  }
}
