import { AfterViewInit, Component, computed, OnDestroy, signal } from '@angular/core';

import { IconComponent } from '@/components/icon/icon.component';

import { scrollObserver } from '@/helpers/scroll.helper';

import { IconName } from '@/models';

@Component({
  selector: 'app-tech-stack',
  imports: [IconComponent],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.css',
})
export class TechStackComponent implements AfterViewInit, OnDestroy {
  techStack = [
    'angular',
    'azure-devops',
    'css',
    'cypress',
    'django',
    'docker',
    'git',
    'html',
    'javascript',
    'jest',
    'nest',
    'node',
    'npm',
    'postgresql',
    'python',
    'react',
    'sass',
    'tailwindcss',
    'typescript',
    'vite',
    'vue',
  ] satisfies IconName[];

  techStackGroups = computed<IconName[][]>(() => {
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

  hoveredIcon = signal<IconName | null>(null);
  setHoveredIcon(icon: IconName) {
    return this.hoveredIcon.set(icon);
  }
  removeHoveredIcon(icon: IconName) {
    if (this.hoveredIcon() === icon) {
      this.hoveredIcon.set(null);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  scrollObserverDisconnect = () => {};
  ngAfterViewInit() {
    this.scrollObserverDisconnect = scrollObserver('#tech-stack', {
      enterCallback: (_, index) => {
        this.techStackGroups()[index].forEach((icon, index) => {
          setTimeout(() => {
            const hoveredIcon = this.hoveredIcon();
            if (hoveredIcon) this.removeHoveredIcon(hoveredIcon);
            this.setHoveredIcon(icon);
          }, 200 * index);
        });
        setTimeout(() => {
          const hoveredIcon = this.hoveredIcon();
          if (hoveredIcon) this.removeHoveredIcon(hoveredIcon);
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
