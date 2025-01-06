import { Component, computed, input } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';

import { IconName, ICON_OPTIONS } from '@/models';

@Component({
  selector: 'app-icon',
  imports: [NgComponentOutlet],
  templateUrl: './icon.component.html',
})
export class IconComponent {
  iconName = input.required<IconName>();
  size = input<string | number>('24');
  color = input<string>('currentcolor');

  icon = computed(() => ICON_OPTIONS.find((icon) => icon.name === this.iconName())!);
  iconInputs = computed(() => ({
    size: this.size(),
    color: this.color(),
  }));
}
