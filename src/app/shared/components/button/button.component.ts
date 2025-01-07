import { Component, computed, input } from '@angular/core';

import { IconComponent } from '../icon/icon.component';

import { IconName } from '@/models';

@Component({
  selector: 'app-button',
  imports: [IconComponent],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  styleType = input<'primary' | 'secondary' | 'tertiary'>('primary');
  size = input<'small' | 'medium' | 'large'>('medium');
  icon = input<IconName | null>(null);

  class = computed(() => {
    let value = 'rounded-md ';
    switch (this.styleType()) {
      case 'primary':
        value += 'bg-color-primary text-white border border-color-primary ';
        break;
      case 'secondary':
        value += 'text-color-primary border border-color-primary ';
        break;
      case 'tertiary':
        value += 'text-color-primary font-bold ';
        break;
    }
    switch (this.size()) {
      case 'small':
        value += 'text-sm py-1 px-2 ';
        break;
      case 'medium':
        value += 'text-md py-2 px-3 ';
        break;
      case 'large':
        value += 'text-lg py-3 px-4 ';
        break;
    }
    return value;
  });

  iconSize = computed(() => {
    switch (this.size()) {
      case 'small':
        return 16;
      case 'medium':
        return 24;
      case 'large':
        return 28;
    }
  });

  iconClass = computed(() => {
    switch (this.size()) {
      case 'small':
        return 'mr-1';
      case 'medium':
        return 'mr-2';
      case 'large':
        return 'mr-3';
    }
  });
}
