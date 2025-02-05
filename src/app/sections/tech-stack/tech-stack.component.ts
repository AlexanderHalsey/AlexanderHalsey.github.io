import { AfterViewInit, Component, computed, OnDestroy, signal } from '@angular/core';

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
export class TechStackComponent implements AfterViewInit, OnDestroy {
  techStack = [
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

  techStackGroups = computed<{ icon: IconName; name: string }[][]>(() => {
    const groupLength = 7;
    const techStack = this.techStack;
    return Array.from(
      { length: Math.ceil(techStack.length / groupLength) },
      (_, index) => index * groupLength,
    ).map((begin, index) => {
      const stack = techStack.slice(begin).concat(techStack.slice(0, begin));
      return index % 2 === 0 ? stack : stack.reverse();
    });
  });

  hoveredItem = signal<TechStackItem | null>(null);
  setHoveredItem(item: TechStackItem) {
    return this.hoveredItem.set(item);
  }
  removeHoveredItem(item: TechStackItem) {
    if (this.hoveredItem() === item) {
      this.hoveredItem.set(null);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  scrollObserverDisconnect = () => {};
  ngAfterViewInit() {
    this.scrollObserverDisconnect = scrollObserver('#tech-stack', {
      enterCallback: (_, index) => {
        this.techStackGroups()[index].forEach((techStackItem, index) => {
          setTimeout(() => {
            const hoveredItem = this.hoveredItem();
            if (hoveredItem) this.removeHoveredItem(hoveredItem);
            this.setHoveredItem(techStackItem);
          }, 200 * index);
        });
        setTimeout(() => {
          const hoveredItem = this.hoveredItem();
          if (hoveredItem) this.removeHoveredItem(hoveredItem);
          this.scrollObserverDisconnect();
        }, 200 * this.techStackGroups()[index].length);
      },
      options: { threshold: 0.9 },
    });
  }

  ngOnDestroy() {
    this.scrollObserverDisconnect();
  }
}

interface TechStackItem {
  icon: IconName;
  name: string;
}
