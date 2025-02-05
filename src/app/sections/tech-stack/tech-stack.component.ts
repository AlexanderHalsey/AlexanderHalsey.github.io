import { AfterViewInit, Component, computed, signal } from '@angular/core';

import { IconComponent } from '@/components/icon/icon.component';
import { TooltipComponent } from '@/components/tooltip/tooltip.component';

import { scrollObserver } from '@/helpers/scroll.helper';

import { IconName } from '@/models';

@Component({
  selector: 'app-tech-stack',
  imports: [IconComponent, TooltipComponent],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.css',
})
export class TechStackComponent implements AfterViewInit {
  techStacks = signal<TechStackItem[][]>(
    Array.from({ length: 3 }, () => TECH_STACK.map((item) => ({ ...item, hovered: false }))),
  );
  // stagger the tech stack items so that each bar shows a different set of items
  getBegininingIndex = (index: number) => index * 7;
  techStackGroups = computed<TechStackItem[][]>(() =>
    this.techStacks().map((techStack, index) => {
      const begin = this.getBegininingIndex(index);
      const stack = techStack.slice(begin).concat(techStack.slice(0, begin));
      return index % 2 === 0 ? stack : stack.reverse();
    }),
  );

  ngAfterViewInit() {
    this.techStacks().forEach((techStack, stackIndex) => {
      const animationTimeMs = 100;
      const begin = this.getBegininingIndex(stackIndex);
      const disconnectObserver = scrollObserver(`.tech-stack-item-${stackIndex}`, {
        enterCallback: () => {
          techStack.forEach((item, index) => {
            const i = (techStack.length + index - begin) % techStack.length;
            setTimeout(() => (item.hovered = true), i * animationTimeMs);
            setTimeout(() => (item.hovered = false), (i + 7) * animationTimeMs);
          });
          setTimeout(() => disconnectObserver(), techStack.length * 2 * animationTimeMs);
        },
        options: { threshold: 1 },
      });
    });
  }
}

interface TechStackItem {
  icon: IconName;
  name: string;
  hovered: boolean;
}

const TECH_STACK = [
  { icon: 'angular', name: 'Angular' },
  { icon: 'azure-devops', name: 'Azure DevOps' },
  { icon: 'css', name: 'CSS' },
  { icon: 'cypress', name: 'Cypress' },
  { icon: 'django', name: 'Django' },
  { icon: 'docker', name: 'Docker' },
  { icon: 'git', name: 'Git' },
  { icon: 'html', name: 'HTML' },
  { icon: 'javascript', name: 'Javascript' },
  { icon: 'jest', name: 'Jest' },
  { icon: 'nest', name: 'Nest' },
  { icon: 'node', name: 'Node' },
  { icon: 'npm', name: 'Npm' },
  { icon: 'postgresql', name: 'PostgreSQL' },
  { icon: 'python', name: 'Python' },
  { icon: 'react', name: 'React' },
  { icon: 'sass', name: 'Sass' },
  { icon: 'tailwindcss', name: 'Tailwind CSS' },
  { icon: 'typescript', name: 'Typescript' },
  { icon: 'vite', name: 'Vite' },
  { icon: 'vue', name: 'Vue' },
] satisfies { icon: IconName; name: string }[];
