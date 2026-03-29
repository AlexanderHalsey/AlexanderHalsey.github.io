import { AfterViewInit, Component, OnDestroy } from '@angular/core';

import { CardComponent } from '@/components/card/card.component';
import { IconComponent } from '@/components/icon/icon.component';
import { MarkdownComponent } from '@/components/markdown/markdown.component';

import { scrollObserver } from '@/helpers/scroll.helper';
import { prefersReducedMotion } from '@/helpers/match-media.helper';

@Component({
  selector: 'app-skills',
  imports: [CardComponent, IconComponent, MarkdownComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent implements AfterViewInit, OnDestroy {
  skills = [
    {
      title: $localize`Web Development`,
      icon: 'web-development',
      description: $localize`:@@skills-web-description:
Frontend development with <span class="font-medium">Vue</span>, <span class="font-medium">Angular</span>, and <span class="font-medium">React</span> — state management with <span class="font-medium">Pinia</span> and <span class="font-medium">Redux</span>, component architecture, and responsive design.
`,
    },
    {
      title: $localize`Backend Development`,
      icon: 'backend-development',
      description: $localize`:@@skills-backend-description:
Backend services built with <span class="font-medium">NestJS</span> and <span class="font-medium">Express</span>, relational data modelled in <span class="font-medium">PostgreSQL</span>, and integrations with external APIs and infrastructure.
`,
    },
    {
      title: $localize`E2E Testing`,
      icon: 'e2e-testing',
      description: $localize`:@@skills-testing-description:
End-to-end and unit tests with <span class="font-medium">Cypress</span> and <span class="font-medium">Jest</span>, integrated throughout development to catch regressions early and keep things reliable as codebases grow.
`,
    },
    {
      title: $localize`Web / UX Design`,
      icon: 'web-design',
      description: $localize`:@@skills-design-description:
Interface design in <span class="font-medium">Figma</span>, built with <span class="font-medium">Tailwind CSS</span> and <span class="font-medium">Material Design</span> component libraries — including creating and maintaining design systems from scratch.
`,
    },
    {
      title: $localize`CI / CD Pipelines`,
      icon: 'ci-cd-pipelines',
      description: $localize`:@@skills-cicd-description:
Working within and setting up CI/CD pipelines to ship code reliably. Comfortable with <span class="font-medium">Docker</span> for containerised deployments and service monitoring.
`,
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
