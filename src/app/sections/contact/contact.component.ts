import { Component, computed, Signal } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

import { ButtonComponent } from '@/components/button/button.component';
import { IconComponent } from '@/components/icon/icon.component';
import { InputComponent } from '@/components/input/input.component';
import { TextAreaComponent } from '@/components/text-area/text-area.component';

import { DisplayService } from '@/services/display.service';
import { ThemeService } from '@/services/theme.service';

import { Theme } from '@/models';

@Component({
  selector: 'app-contact',
  imports: [ButtonComponent, IconComponent, InputComponent, NgTemplateOutlet, TextAreaComponent],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  isMobile: Signal<boolean>;
  theme: Signal<Theme>;
  backgroundColor: Signal<string>;
  constructor(
    private displayService: DisplayService,
    private themeService: ThemeService,
  ) {
    this.isMobile = displayService.get('isMobile');
    this.theme = themeService.get('theme');
    this.backgroundColor = computed(() => themeService.backgroundColors().background2);
  }
}
