import { Component, input } from '@angular/core';

import { CardComponent } from '../card/card.component';

import { TimelineItem } from '@/models';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-timeline',
  imports: [CardComponent, DatePipe],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css',
})
export class TimelineComponent<T extends TimelineItem> {
  items = input.required<T[]>();
}
