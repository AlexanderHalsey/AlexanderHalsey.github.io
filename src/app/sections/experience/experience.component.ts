import { Component, computed } from '@angular/core';

import { TimelineComponent } from '@/components/timeline/timeline.component';

import type { TimelineItem } from '@/models';

@Component({
  selector: 'app-experience',
  imports: [TimelineComponent],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
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
