import { Component, computed, Signal } from '@angular/core';

import { TimelineComponent } from '@/components/timeline/timeline.component';

import { Theme, ThemeService } from '@/services/theme.service';

import type { TimelineItem } from '@/models';

@Component({
  selector: 'app-experience',
  imports: [TimelineComponent],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  theme: Signal<Theme>;
  backgroundColor: Signal<string>;
  constructor(private themeService: ThemeService) {
    this.theme = themeService.get('theme');
    this.backgroundColor = computed(() => themeService.backgroundColors().background1);
  }

  experience = computed<TimelineItem[]>(() => [
    {
      startDate: new Date(2022, 7, 1),
      description: $localize`
I developed a variety of back-office microservices used by our internal teams to assist
hospital clients, helping streamline processes and meet key performance indicators. I used
Vue.js and TypeScript to build user-friendly interfaces, followed SPA design principles,
and helped develop and maintain a centralised UI design system to ensure consistency
across applications. I collaborated with senior developers, writing pull requests and
incorporating feedback to improve code quality. Additionally, I worked with product
owners and peer developers to brainstorm solutions and align on project goals,
contributing to both technical and business objectives. To enhance reliability and
scalability, I implemented end-to-end and unit testing using Cypress and Jest, developed
reusable components, and wrote clean, well-documented code. On the backend, I utilised
the NestJS framework on the backend with PostgreSQL as a database and ORM tools to
ensure efficient data management. I also worked with Git, Docker, Kubernetes, and Azure
DevOps for CI/CD pipelines and gained experience with proxy gateways / load balancers
to optimise communication between services.
      `,
    },
    {
      startDate: new Date(2021, 7, 1),
      description: $localize`desc 2`,
    },
    {
      startDate: new Date(2020, 7, 1),
      description: $localize`
I developed a donation management system using Python/Django and JavaScript that
enabled the institute’s admin to track donations, manage donor information, generate
individual and annual fiscal PDF receipts, and schedule email dispatches. This project was
fully comprehensive, covering CRUD functionality, frontend and backend processes, REST
APIs, external libraries, and various architectural design patterns. As a self-taught
developer at this stage, I adopted a proactive, problem-solving approach, demonstrating
my ability to tackle challenges independently and continuously learn new technologies.
      `,
    },
  ]);
}
