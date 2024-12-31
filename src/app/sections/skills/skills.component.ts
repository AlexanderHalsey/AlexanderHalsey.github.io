import { Component } from '@angular/core';

import { CardComponent } from '@/components/card/card.component';

@Component({
  selector: 'app-skills',
  imports: [CardComponent],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
  skills = [
    {
      title: 'Web Development',
      img: 'web-development.svg',
      description:
        'I have experience building websites using HTML, CSS, and JavaScript. I have also used frameworks like Angular, React, and Vue.',
    },
    {
      title: 'Mobile Development',
      img: 'mobile-development.svg',
      description:
        'I have experience building mobile applications using Android and iOS. I have also used frameworks like React Native and Flutter.',
    },
    {
      title: 'Backend Development',
      img: 'backend-development.svg',
      description:
        'I have experience building backend services using Node.js, Express, and MongoDB. I have also used cloud services like AWS and Firebase.',
    },
    {
      title: 'DevOps',
      img: 'devops.svg',
      description:
        'I have experience setting up CI/CD pipelines using tools like Jenkins, Travis CI, and GitHub Actions. I have also used containerization tools like Docker and Kubernetes.',
    },
    {
      title: 'Machine Learning',
      img: 'machine-learning.svg',
      description:
        'I have experience building machine learning models using Python and libraries like TensorFlow and PyTorch. I have also used cloud services like Google Cloud AI Platform and AWS SageMaker.',
    },
  ];
}
