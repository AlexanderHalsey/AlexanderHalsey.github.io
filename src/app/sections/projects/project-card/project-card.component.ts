import { Component, ElementRef, input, output, ViewChild } from '@angular/core';

import { CardComponent } from '@/components/card/card.component';

import { Project } from '@/models';

@Component({
  selector: 'app-project-card',
  imports: [CardComponent],
  templateUrl: './project-card.component.html',
})
export class ProjectCardComponent {
  project = input.required<Project>();
  open = output<{ project: Project; rect: DOMRect; element: HTMLElement }>();

  @ViewChild('cardRef') cardRef!: ElementRef<HTMLElement>;

  handleClick(): void {
    const element = this.cardRef.nativeElement;
    this.open.emit({ project: this.project(), rect: element.getBoundingClientRect(), element });
  }
}
