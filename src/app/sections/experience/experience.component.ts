/* eslint-disable @typescript-eslint/no-empty-function */
import { AfterViewInit, Component, computed, OnDestroy, Signal } from '@angular/core';

import { TimelineComponent } from '@/components/timeline/timeline.component';

import { ThemeService } from '@/services/theme.service';

import { scrollObserver } from '@/helpers/scroll.helper';

import { TimelineItem } from '@/models';

@Component({
  selector: 'app-experience',
  imports: [TimelineComponent],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent implements AfterViewInit, OnDestroy {
  backgroundColor: Signal<string>;
  constructor(private themeService: ThemeService) {
    this.backgroundColor = computed(() => themeService.mountainBackgroundColor());
  }

  experience = computed<TimelineItem[]>(() => [
    {
      startDate: new Date(2025, 10, 1),
      endDate: new Date(2026, 2, 31),
      title: $localize`:@@experience-dms-title:Independent Developer`,
      description: $localize`:@@experience-dms-description:
Full-stack rebuild of the institute's donation management system, delivered pro bono. Replaced the original Django/JS app with a modern, production-ready architecture over 4 months.

<div class="ms-4 mt-4">• <span class="font-medium">Designed</span> and built a REST API with NestJS/TypeScript backed by PostgreSQL and Redis for job queue processing.</div>
<div class="ms-4 mt-2">• <span class="font-medium">Developed</span> a Vue.js SPA with donor and donation management, JWT authentication, and automated tax receipt generation.</div>
<div class="ms-4 mt-2">• <span class="font-medium">Deployed</span> the full stack with Docker, including GCS integration for file storage and email templates.</div>
<div class="ms-4 mt-2">• <span class="font-medium">Wrote</span> technical documentation covering architecture, setup, and deployment.</div>
      `,
    },
    {
      startDate: new Date(2022, 6, 1),
      endDate: new Date(2025, 5, 30),
      title: $localize`Software Developer`,
      description: $localize`
Grew from intern to full-time developer over 3 years at Careside, a Paris digital health company, including a 6-month freelance/contractor period (Jan–Jun 2023) while working remotely from abroad.

<div class="ms-4 mt-4">• <span class="font-medium">Designed</span> and maintained a centralized UI design system for consistency across applications.</div>
<div class="ms-4 mt-2">• <span class="font-medium">Implemented</span> CI/CD pipelines with Git, Docker, and Azure DevOps.</div>
<div class="ms-4 mt-2">• <span class="font-medium">Built</span> full-stack features with Vue.js/TypeScript on the frontend and NestJS/PostgreSQL on the backend.</div>
<div class="ms-4 mt-2">• <span class="font-medium">Enhanced</span> reliability with end-to-end and unit tests using Cypress and Jest.</div>
<div class="ms-4 mt-2">• <span class="font-medium">Optimized</span> service communication using proxy gateways and load balancers.</div>
      `,
    },
    {
      startDate: new Date(2022, 4, 27),
      milestone: $localize`Certificate of Completion – Full-Stack JavaScript Web & Mobile Developer (La Capsule)`,
    },
    {
      startDate: new Date(2021, 3, 1),
      endDate: new Date(2021, 11, 31),
      title: $localize`Volunteer Programmer`,
      description: $localize`
I developed a donation management system that enabled the institute’s admin to track donations, manage donor information, generate individual and annual fiscal PDF receipts, and schedule email dispatches.
<div class="ms-4 mt-4">• <span class="font-medium">Replaced</span> a manual admin workflow with a donation management system, saving the institute significant time on donor records, receipts, and communications.</div>
<div class="ms-4 mt-2">• <span class="font-medium">Implemented</span> automated PDF generation for individual and annual fiscal tax receipts.</div>
<div class="ms-4 mt-2">• <span class="font-medium">Built</span> integration with an external profile system to keep donor records automatically up to date.</div>
<div class="ms-4 mt-2">• <span class="font-medium">Delivered</span> end-to-end in Python/Django with an interactive JavaScript frontend.</div>
      `,
    },
  ]);

  scrollObserverEntryDisconnect = () => {};
  scrollObserverLeaveDisconnect = () => {};
  ngAfterViewInit() {
    this.scrollObserverEntryDisconnect = scrollObserver('.timeline-item', {
      enterCallback: (entry) => {
        entry.target.classList.add('show');
      },
      options: { threshold: 0.5 },
    });
    this.scrollObserverLeaveDisconnect = scrollObserver('.timeline-item', {
      leaveCallback: (entry) => {
        entry.target.classList.remove('show');
      },
      options: { threshold: 0.2 },
    });
  }

  ngOnDestroy(): void {
    this.scrollObserverEntryDisconnect();
    this.scrollObserverLeaveDisconnect();
  }
}
