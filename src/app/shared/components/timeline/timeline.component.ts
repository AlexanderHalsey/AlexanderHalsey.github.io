import { Component, input, Signal } from '@angular/core';
import { DatePipe } from '@angular/common';

import { CardComponent } from '../card/card.component';
import { IconComponent } from '../icon/icon.component';

import { ThemeService } from '@/services/theme.service';

import { TimelineItem } from '@/models';

@Component({
  selector: 'app-timeline',
  imports: [CardComponent, DatePipe, IconComponent],
  templateUrl: './timeline.component.html',
})
export class TimelineComponent<T extends TimelineItem> {
  items = input.required<T[]>();

  theme: Signal<string>;

  constructor(private themeService: ThemeService) {
    this.theme = themeService.get('theme');
  }
}
