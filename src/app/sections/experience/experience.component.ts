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
      startDate: new Date(2023, 5, 1),
      endDate: new Date(2025, 5, 30),
      title: $localize`Junior Software Developer`,
      description: $localize`
I developed back-office microservices to support hospital clients and internal teams, streamlining processes and meeting key performance indicators.

<div class="ms-4 mt-4">• <span class="font-medium">Designed</span> and maintained a centralized UI design system for consistency across applications.</div>
<div class="ms-4 mt-2">• <span class="font-medium">Collaborated</span> with product owners and peer developers to define project goals and solutions.</div>
<div class="ms-4 mt-2">• <span class="font-medium">Implemented</span> CI/CD pipelines with Git, Docker, Kubernetes, and Azure DevOps.</div>
<div class="ms-4 mt-2">• <span class="font-medium">Optimized</span> service communication using proxy gateways and load balancers.</div>
      `,
    },
    {
      startDate: new Date(2023, 0, 1),
      endDate: new Date(2023, 5, 1),
      title: $localize`Freelance Web Developer`,
      description: $localize`
<div>• <span class="font-medium">Built</span> user-friendly interfaces using Vue.js and TypeScript, following SPA design principles.</div>
<div class="mt-2">• <span class="font-medium">Wrote</span> pull requests, incorporated feedback, and worked closely with senior developers to improve code quality.</div>
<div class="mt-2">• <span class="font-medium">Developed</span> reusable components and maintained clean, well-documented code.</div>
<div class="mt-2">• <span class="font-medium">Enhanced</span> reliability with end-to-end and unit tests using Cypress and Jest.</div>
      `,
    },
    {
      startDate: new Date(2023, 0, 1),
      milestone: $localize`Registered as a freelancer in France.`,
    },
    {
      startDate: new Date(2022, 6, 1),
      endDate: new Date(2023, 0, 1),
      title: $localize`Software Developer Intern`,
      description: $localize`
<div>• <span class="font-medium">Contributed</span> to backend development using NestJS and PostgreSQL, ensuring efficient data management.</div>
<div class="mt-2">• <span class="font-medium">Gained</span> experience working with ORM tools and database optimization.</div>
<div class="mt-2">• <span class="font-medium">Assisted</span> in debugging, troubleshooting, and improving application performance.</div>
<div class="mt-2">• <span class="font-medium">Learned</span> and applied best practices in software development and team collaboration.</div>
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
I developed a donation management system enabled the institute’s admin to track donations, manage donor information, generate individual and annual fiscal PDF receipts, and schedule email dispatches.
<div class="ms-4 mt-4">• <span class="font-medium">Python/Django & JavaScript</span> – Backend logic with Django, interactive UI with JavaScript.</div>
<div class="ms-4 mt-2">• <span class="font-medium">CRUD functionality</span> – Managed donor and donation records.</div>
<div class="ms-4 mt-2">• <span class="font-medium">Frontend & backend integration</span> – Ensured seamless data flow.</div>
<div class="ms-4 mt-2">• <span class="font-medium">REST APIs</span> – Secure data retrieval and updates.</div>
<div class="ms-4 mt-2">• <span class="font-medium">External libraries</span> – Used for PDFs (ReportLab) and email automation.</div>
<div class="ms-4 mt-2 mb-4">• <span class="font-medium">MVC architecture</span> – Maintained clean, scalable code.</div>
As a self-taught
developer at this stage, I adopted a proactive, problem-solving approach, demonstrating
my ability to tackle challenges independently and continuously learn new technologies.
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
