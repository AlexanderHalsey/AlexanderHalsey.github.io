import { Component } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';

import { CardComponent } from '@/components/card/card.component';
import { WebDevelopmentIconComponent } from '@/assets/skill-icons/web-development-icon.component';
import { MobileDevelopmentIconComponent } from '@/assets/skill-icons/mobile-development-icon.component';
import { BackendDevelopmentIconComponent } from '@/assets/skill-icons/backend-development-icon.component';
import { DevopsIconComponent } from '@/assets/skill-icons/devops-icon.component';
import { MachineLearningIconComponent } from '@/assets/skill-icons/machine-learning-icon.component';

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
      title: 'Mobile Development',
      icon: MobileDevelopmentIconComponent,
      description:
        'I have experience building mobile applications using Android and iOS. I have also used frameworks like React Native and Flutter.',
    },
    {
      title: 'Backend Development',
      icon: BackendDevelopmentIconComponent,
      description:
        'I have experience building backend services using Node.js, Express, and MongoDB. I have also used cloud services like AWS and Firebase.',
    },
    {
      title: 'DevOps',
      icon: DevopsIconComponent,
      description:
        'I have experience setting up CI/CD pipelines using tools like Jenkins, Travis CI, and GitHub Actions. I have also used containerization tools like Docker and Kubernetes.',
    },
    {
      title: 'Machine Learning',
      icon: MachineLearningIconComponent,
      description:
        'I have experience building machine learning models using Python and libraries like TensorFlow and PyTorch. I have also used cloud services like Google Cloud AI Platform and AWS SageMaker.',
    },
  ];
}
