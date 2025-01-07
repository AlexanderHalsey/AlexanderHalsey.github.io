import { Component, input, Signal } from '@angular/core';

import { ThemeService } from '@/services/theme.service';

import { Theme } from '@/models';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
})
export class TextAreaComponent {
  placeholder = input<string>('');

  theme: Signal<Theme>;
  constructor(themeService: ThemeService) {
    this.theme = themeService.get('theme');
  }
}
