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
  animateOnHover = input<boolean>();

  icon = computed(() => ICON_OPTIONS.find((icon) => icon.name === this.iconName())!);
  iconAttributes = computed(() => {
    const attributes: Record<string, unknown> = {
      size: this.size(),
      color: this.color(),
    };
    if ('allowAnimate' in this.icon()) {
      attributes['animateOnHover'] = this.animateOnHover();
    }
    return attributes;
  });
}
