import { Component, input, Signal } from '@angular/core';
import { DatePipe, NgTemplateOutlet } from '@angular/common';

import { CardComponent } from '../card/card.component';
import { IconComponent } from '../icon/icon.component';

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
  constructor(private displayService: DisplayService) {
    this.isMobile = displayService.get('isMobile');
  }
}
