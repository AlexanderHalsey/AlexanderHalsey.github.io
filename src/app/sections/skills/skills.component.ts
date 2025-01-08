import { Component } from '@angular/core';

import { CardComponent } from '@/components/card/card.component';
import { IconComponent } from '@/components/icon/icon.component';

@Component({
  selector: 'app-skills',
  imports: [CardComponent, IconComponent],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
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
}
