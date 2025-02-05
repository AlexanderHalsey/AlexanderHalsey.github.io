import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-tooltip',
  imports: [NgClass],
  templateUrl: './tooltip.component.html',
})
export class TooltipComponent {
  location = input<'left' | 'right' | 'top' | 'bottom'>('top');
  width = input<number>(150);
  activatorClass = input<string>('');
  tooltipClass = input<string>('bg-primary text-white');
}
