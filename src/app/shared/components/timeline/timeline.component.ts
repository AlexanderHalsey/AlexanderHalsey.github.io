import { Component, input, signal, Signal } from '@angular/core';
import { DatePipe, NgClass, NgTemplateOutlet } from '@angular/common';

import { CardComponent } from '../card/card.component';
import { IconComponent } from '../icon/icon.component';
import { MarkdownComponent } from '../markdown/markdown.component';

import { DisplayService } from '@/services/display.service';

import { TimelineDateRange, TimelineItem, TimelineMilestone } from '@/models';

@Component({
  selector: 'app-timeline',
  imports: [CardComponent, DatePipe, IconComponent, MarkdownComponent, NgClass, NgTemplateOutlet],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css',
})
export class TimelineComponent<T extends TimelineItem> {
  items = input.required<T[]>();

  isMobile: Signal<boolean>;
  constructor(private displayService: DisplayService) {
    this.isMobile = displayService.get('isMobile');
  }

  expanded = signal<Record<string, boolean>>({});
  toggle = (index: number) => {
    this.expanded.update((currentValue) => ({ ...currentValue, [index]: !currentValue[index] }));
  };

  isMilestone = (item: TimelineItem): item is TimelineMilestone => 'milestone' in item;
  isDateRange = (item: TimelineItem): item is TimelineDateRange => 'description' in item;
}
