import { Component, computed, input } from '@angular/core';

import { IconComponent } from '../icon/icon.component';

import { IconName } from '@/models';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [IconComponent, NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  styleType = input<'primary' | 'secondary' | 'tertiary'>('primary');
  type = input<'button' | 'submit' | 'reset'>('button');
  size = input<'small' | 'medium' | 'large'>('medium');
  icon = input<IconName | null>(null);
  iconOnly = input<boolean>(false);
  iconColor = input<string>('currentColor');
  disabled = input<boolean>(false);

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
}
