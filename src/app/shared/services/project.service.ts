import { computed, Injectable, signal } from '@angular/core';

import { Project } from '@/models';

interface State {
  selectedProject: Project | null;
  originRect: DOMRect | null;
  originElement: HTMLElement | null;
}

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private readonly state = signal<State>({
    selectedProject: null,
    originRect: null,
    originElement: null,
  });

  readonly selectedProject = computed(() => this.state().selectedProject);
  readonly originRect = computed(() => this.state().originRect);
  readonly originElement = computed(() => this.state().originElement);

  open(project: Project, originRect: DOMRect, originElement: HTMLElement): void {
    this.state.set({ selectedProject: project, originRect, originElement });
  }

  close(): void {
    this.state.set({ selectedProject: null, originRect: null, originElement: null });
  }
}
