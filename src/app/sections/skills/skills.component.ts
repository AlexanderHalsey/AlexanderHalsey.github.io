import { Component } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';

import { CardComponent } from '@/components/card/card.component';
import { WebDevelopmentIconComponent } from '@/assets/icons/web-development-icon.component';
import { MobileDevelopmentIconComponent } from '@/assets/icons/mobile-development-icon.component';
import { BackendDevelopmentIconComponent } from '@/assets/icons/backend-development-icon.component';
import { CiCdIconComponent } from '@/assets/icons/ci-cd-icon.component';
import { E2ETestingIconComponent } from '@/assets/icons/e2e-testing-icon.component';

@Component({
  selector: 'app-skills',
  imports: [CardComponent, NgComponentOutlet],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
  skills = [
    {
      title: 'Web Development',
      icon: WebDevelopmentIconComponent,
      description:
        'I have experience building websites using HTML, CSS, and JavaScript. I have also used frameworks like Angular, React, and Vue.',
    },
    {
      title: 'Backend Development',
      icon: BackendDevelopmentIconComponent,
      description:
        'I have experience building backend services using Node.js, Express, and MongoDB. I have also used cloud services like AWS and Firebase.',
    },
    {
      title: 'E2E Testing',
      icon: E2ETestingIconComponent,
      description:
        'I have experience writing end-to-end tests using tools like Cypress and Selenium. I have also used unit testing frameworks like Jest and Mocha.',
    },
    {
      title: 'CI/CD Pipelines',
      icon: CiCdIconComponent,
      description:
        'I have experience setting up CI/CD pipelines using tools like Jenkins, Travis CI, and GitHub Actions. I have also used containerization tools like Docker and Kubernetes.',
    },
    {
      title: 'Mobile Development',
      icon: MobileDevelopmentIconComponent,
      description:
        'I have experience building mobile applications using Android and iOS. I have also used frameworks like React Native and Flutter.',
    },
  ];
}
