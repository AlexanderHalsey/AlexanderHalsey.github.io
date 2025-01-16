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
      description: $localize`
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam minus illo, obcaecati consequuntur labore odit facere esse ullam, eaque incidunt asperiores cupiditate expedita quibusdam voluptatibus? Modi id officiis amet omnis.
Dolor, quidem natus ipsum error, iure est alias voluptatum velit dolores labore aliquam explicabo reiciendis dignissimos ullam quasi nobis culpa optio nulla eum. Iusto similique placeat saepe sunt accusamus magnam.
Ex ratione repudiandae sit expedita rerum, officia quos officiis, cum distinctio provident suscipit at qui pariatur fugiat aliquam maxime amet tempore, nulla harum nihil deleniti nam incidunt ipsa ipsam? Cum!
Voluptas praesentium fugiat placeat tenetur debitis! Corporis saepe non, labore neque nulla nihil id commodi quia illum modi dolores ex ratione quaerat doloremque facere sapiente quo possimus voluptatem a similique?
Vero porro sint dolores soluta laudantium delectus ea praesentium eius tempora commodi? Delectus explicabo sed cumque. Quam, quo? Laboriosam nesciunt debitis velit magni fugiat alias cumque doloribus nisi error voluptatem.
      `,
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

  scrollObserverEntryDisconnect = () => {};
  scrollObserverLeaveDisconnect = () => {};
  ngAfterViewInit() {
    this.scrollObserverEntryDisconnect = scrollObserver('.timeline-item', {
      enterCallback: (entry) => {
        entry.target.classList.add('show');
      },
      options: { threshold: 0.8 },
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
