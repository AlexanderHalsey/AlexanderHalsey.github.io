import { Component, computed, signal, Signal } from '@angular/core';

import { IconComponent } from '@/components/icon/icon.component';

import { ThemeService } from '@/services/theme.service';

import { IconName, Theme } from '@/models';

@Component({
  selector: 'app-tech-stack',
  imports: [IconComponent],
  templateUrl: './tech-stack.component.html',
})
export class TechStackComponent {
  theme: Signal<Theme>;
  constructor(themeService: ThemeService) {
    this.theme = themeService.get('theme');
  }
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
    const randomList = this.techStack; //.sort(() => Math.random() - 0.5);
    return Array.from(
      { length: Math.ceil(this.techStack.length / groupLength) },
      (_, index) => index * groupLength,
    ).map((begin) => randomList.slice(begin, begin + groupLength));
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
}
