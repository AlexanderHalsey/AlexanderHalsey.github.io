import { AfterViewInit, Component, computed, inject, OnDestroy, Signal } from '@angular/core';

import { ProjectCardComponent } from '@/sections/projects/project-card/project-card.component';

import { ProjectService } from '@/services/project.service';

import { scrollObserver } from '@/helpers/scroll.helper';

import { Project } from '@/models';
import { ThemeService } from '@/services/theme.service';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements AfterViewInit, OnDestroy {
  private projectService = inject(ProjectService);
  backgroundColor: Signal<string>;
  constructor(private themeService: ThemeService) {
    this.backgroundColor = computed(() => themeService.mountainBackgroundColor());
  }

  projects = computed<Project[]>(() => [
    {
      id: 'dms-v2',
      title: $localize`:@@project-dms-title:Donation Management System v2`,
      summary: $localize`:@@project-dms-summary:Full-stack rebuild of a donation management platform, built independently as a volunteer.`,
      description: $localize`:@@project-dms-description:Built for a non-profit that was previously managing donations manually, this system brought everything into one place: donor records, donation tracking, individual and annual tax receipt generation as PDFs, and automated bulk email dispatch. Background jobs run via Redis handle the heavy lifting during annual receipt cycles, and donor profiles stay in sync with the institute's external membership platform. A full rewrite of an earlier volunteer project, replacing a Django/JavaScript app with NestJS, Vue.js, TypeScript, and Docker.`,
      tech: ['NestJS', 'Vue.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'GCS'],
      links: [
        { label: 'GitHub', url: 'https://github.com/AlexanderHalsey/Donation-Management-System' },
      ],
      images: [
        'projects/dms/donor-detail.png',
        'projects/dms/donation-list.png',
        'projects/dms/tax-receipt-example.png',
      ],
    },
    {
      id: 'habit-tracker',
      title: $localize`:@@project-habit-title:Habit Tracker`,
      summary: $localize`:@@project-habit-summary:A personal desktop app for building and tracking daily habits, with optional macOS Calendar integration for custom recurrence patterns.`,
      description: $localize`:@@project-habit-description:- Cross-platform desktop app built with Tauri — Rust backend, React/TypeScript frontend
- Local SQLite database; no server, no account, data stored per OS conventions
- Two habit modes: simple daily tracking, or calendar-linked with custom recurrence (weekly, monthly, etc.)
- macOS Calendar sync via AppleScript — recurring events drive habit scheduling via rrule
- Stats dashboard with total and monthly completion rates per habit
- Background launchd services for daily reminders and automated calendar sync`,
      tech: ['Tauri', 'Rust', 'React', 'TypeScript', 'SQLite', 'Vite'],
      links: [{ label: 'GitHub', url: 'https://github.com/AlexanderHalsey/Habit-Tracker' }],
      images: ['projects/habitTracker/habit_tracker.png'],
    },
  ]);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  scrollObserverDisconnect = () => {};

  ngAfterViewInit(): void {
    this.scrollObserverDisconnect = scrollObserver('.project-cards', {
      enterCallback: (entry) => entry.target.classList.add('show'),
      leaveCallback: (entry) => entry.target.classList.remove('show'),
      options: { threshold: 0.2 },
    });
  }

  ngOnDestroy(): void {
    this.scrollObserverDisconnect();
  }

  openProject(event: { project: Project; rect: DOMRect; element: HTMLElement }): void {
    this.projectService.open(event.project, event.rect, event.element);
  }
}
