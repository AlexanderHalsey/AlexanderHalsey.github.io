import {
  AfterViewInit,
  Component,
  computed,
  ElementRef,
  HostListener,
  inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { CloseIconComponent } from '@/assets/icons/close-icon.component';
import { MarkdownComponent } from '@/shared/components/markdown/markdown.component';

import { prefersReducedMotion } from '@/helpers/match-media.helper';
import { ProjectService } from '@/services/project.service';

@Component({
  selector: 'app-project-overlay',
  imports: [CloseIconComponent, MarkdownComponent],
  templateUrl: './project-overlay.component.html',
  styleUrl: './project-overlay.component.css',
})
export class ProjectOverlayComponent implements AfterViewInit {
  private platformId = inject(PLATFORM_ID);
  protected projectService = inject(ProjectService);

  protected project = computed(() => this.projectService.selectedProject()!);

  @ViewChild('panel') panelRef!: ElementRef<HTMLElement>;
  @ViewChild('backdrop') backdropRef!: ElementRef<HTMLElement>;

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close();
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.playOpenAnimation();
    this.panelRef.nativeElement.focus();
  }

  private playOpenAnimation(): void {
    const backdrop = this.backdropRef.nativeElement;
    backdrop.style.opacity = '1';

    if (prefersReducedMotion) return;

    const origin = this.projectService.originRect()!;
    const panel = this.panelRef.nativeElement;
    const panelRect = panel.getBoundingClientRect();

    const scaleX = origin.width / panelRect.width;
    const scaleY = origin.height / panelRect.height;
    const tx = origin.left - panelRect.left;
    const ty = origin.top - panelRect.top;

    panel.style.transformOrigin = 'top left';
    panel.style.transition = 'none';
    panel.style.transform = `translate(${tx}px, ${ty}px) scale(${scaleX}, ${scaleY})`;

    // Force reflow before starting transition
    panel.getBoundingClientRect();

    panel.style.transition = 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)';
    panel.style.transform = 'none';
  }

  close(): void {
    const originElement = this.projectService.originElement();

    if (!isPlatformBrowser(this.platformId) || prefersReducedMotion) {
      this.projectService.close();
      originElement?.focus();
      return;
    }

    const panel = this.panelRef.nativeElement;
    const backdrop = this.backdropRef.nativeElement;

    panel.style.transformOrigin = 'center';
    panel.style.transition = 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease';
    panel.style.transform = 'scale(0.9)';
    panel.style.opacity = '0';
    backdrop.style.opacity = '0';

    panel.addEventListener(
      'transitionend',
      () => {
        this.projectService.close();
        originElement?.focus();
      },
      { once: true },
    );
  }
}
