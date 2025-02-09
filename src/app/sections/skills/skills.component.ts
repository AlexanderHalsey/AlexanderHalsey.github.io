import { AfterViewInit, Component, OnDestroy } from '@angular/core';

import { CardComponent } from '@/components/card/card.component';
import { IconComponent } from '@/components/icon/icon.component';

import { scrollObserver } from '@/helpers/scroll.helper';
import { prefersReducedMotion } from '@/helpers/match-media.helper';

@Component({
  selector: 'app-skills',
  imports: [CardComponent, IconComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent implements AfterViewInit, OnDestroy {
  skills = [
    {
      title: 'Web Development',
      icon: 'web-development',
      description: $localize`I have experience building frontend applications using frameworks like Vue, Angular, and React, working with state management libraries like Pinia and Redux, and creating responsive designs.`,
    },
    {
      title: 'Backend Development',
      icon: 'backend-development',
      description: $localize`I have experience building backend services using frameworks like NestJS and Express, working with SQL databases such as PostgreSQL, and integrating with external infrastructure APIs.`,
    },
    {
      title: 'E2E Testing',
      icon: 'e2e-testing',
      description: $localize`I have experience writing end-to-end and unit tests using tools like Cypress and Jest. These tests have been crucial in catching errors when updating solutions, ensuring long-term scalability and reliability.`,
    },
    {
      title: 'Mobile Development',
      icon: 'mobile-development',
      description: $localize`I have foundational experience in building mobile applications creating solutions for web, iOS, and Android platforms. I gained hands-on experience with React Native during my programming course.`,
    },
    {
      title: 'Web / UX Design',
      icon: 'web-design',
      description: $localize`I have experience designing websites using tools like Figma, leveraging CSS frameworks such as Tailwind CSS, and working with Material Design libraries, including creating, using, and maintaining them.`,
    },
    {
      title: 'CI / CD Pipelines',
      icon: 'ci-cd-pipelines',
      description: $localize`I have a good understanding of CI/CD pipelines and use them to push code within my work’s infrastructure. I also work with Docker and Kubernetes, debugging deployment files and monitoring services.`,
    },
  ] as const;

  prefersReducedMotion = prefersReducedMotion;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  scrollObserverDisconnect = () => {};
  ngAfterViewInit() {
    this.scrollObserverDisconnect = scrollObserver('.skills', {
      enterCallback: (entry) => {
        entry.target.classList.add('show');
      },
      leaveCallback: (entry) => {
        entry.target.classList.remove('show');
      },
      options: { threshold: 0.2 },
    });
  }

  ngOnDestroy(): void {
    this.scrollObserverDisconnect();
  }
}
