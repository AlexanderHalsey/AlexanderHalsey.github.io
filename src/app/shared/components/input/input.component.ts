import { Component, input, Signal } from '@angular/core';

import { ThemeService } from '@/services/theme.service';

import { Theme } from '@/models';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class InputComponent {
  type = input<'text' | 'email' | 'tel'>('text');
  placeholder = input<string>('');

  theme: Signal<Theme>;
  constructor(themeService: ThemeService) {
    this.theme = themeService.get('theme');
  }
}
