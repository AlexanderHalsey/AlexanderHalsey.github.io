import { Component, input, Signal } from '@angular/core';
import { DatePipe, NgTemplateOutlet } from '@angular/common';

import { CardComponent } from '../card/card.component';
import { IconComponent } from '../icon/icon.component';

import { ThemeService } from '@/services/theme.service';

import { TimelineItem } from '@/models';
import { DisplayService } from '@/services/display.service';

@Component({
  selector: 'app-timeline',
  imports: [CardComponent, DatePipe, IconComponent, NgTemplateOutlet],
  templateUrl: './timeline.component.html',
})
export class TimelineComponent<T extends TimelineItem> {
  items = input.required<T[]>();

  isMobile: Signal<boolean>;
  theme: Signal<string>;
  constructor(
    private themeService: ThemeService,
    private displayService: DisplayService,
  ) {
    this.theme = themeService.get('theme');
    this.isMobile = displayService.get('isMobile');
  }
}
