import { AfterViewInit, Component, OnDestroy } from '@angular/core';

import { CardComponent } from '@/components/card/card.component';
import { IconComponent } from '@/components/icon/icon.component';

import { scrollObserver } from '@/helpers/scroll.helper';

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
      description:
        'I have experience building websites using HTML, CSS, and JavaScript. I have also used frameworks like Angular, React, and Vue.',
    },
    {
      title: 'Backend Development',
      icon: 'backend-development',
      description:
        'I have experience building backend services using Node.js, Express, and MongoDB. I have also used cloud services like AWS and Firebase.',
    },
    {
      title: 'E2E Testing',
      icon: 'e2e-testing',
      description:
        'I have experience writing end-to-end tests using tools like Cypress and Selenium. I have also used unit testing frameworks like Jest and Mocha.',
    },
    {
      title: 'CI/CD Pipelines',
      icon: 'ci-cd-pipelines',
      description:
        'I have experience setting up CI/CD pipelines using tools like Jenkins, Travis CI, and GitHub Actions. I have also used containerization tools like Docker and Kubernetes.',
    },
    {
      title: 'Mobile Development',
      icon: 'mobile-development',
      description:
        'I have experience building mobile applications using Android and iOS. I have also used frameworks like React Native and Flutter.',
    },
  ] as const;

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
