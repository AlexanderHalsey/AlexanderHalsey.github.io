import { Component, computed, Signal } from '@angular/core';

import { TimelineComponent } from '@/components/timeline/timeline.component';

import type { TimelineItem } from '@/models';
import { ThemeService } from '@/services/theme.service';

@Component({
  selector: 'app-experience',
  imports: [TimelineComponent],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  backgroundColor: Signal<string>;
  constructor(private themeService: ThemeService) {
    this.backgroundColor = computed(() => themeService.backgroundColors().background1);
  }

  experience = computed<TimelineItem[]>(() => [
    {
      startDate: new Date(2022, 7, 1),
      description: $localize`desc 1`,
    },
    {
      startDate: new Date(2021, 7, 1),
      description: $localize`desc 2`,
    },
    {
      startDate: new Date(2020, 7, 1),
      description: $localize`desc 3`,
    },
  ]);
}
