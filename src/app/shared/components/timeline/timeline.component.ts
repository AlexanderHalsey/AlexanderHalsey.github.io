import { Component, input, signal, Signal } from '@angular/core';
import { DatePipe, NgTemplateOutlet } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { ButtonComponent } from '../button/button.component';
import { CardComponent } from '../card/card.component';
import { IconComponent } from '../icon/icon.component';
import { MarkdownComponent } from '../markdown/markdown.component';

import { DisplayService } from '@/services/display.service';
import { prefersReducedMotion } from '@/helpers/match-media.helper';

import { TimelineDateRange, TimelineItem, TimelineMilestone } from '@/models';

@Component({
  selector: 'app-timeline',
  imports: [
    ButtonComponent,
    CardComponent,
    DatePipe,
    IconComponent,
    MarkdownComponent,
    NgTemplateOutlet,
  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css',
  animations: [
    trigger('expand', [
      state('open', style({ height: '*' })),
      state('closed', style({ height: '250px' })),
      ...(prefersReducedMotion
        ? []
        : [transition('open <=> closed', [animate('0.3s ease-in-out')])]),
    ]),
  ],
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
