import { AfterViewInit, Component, Signal } from '@angular/core';

import { AboutMeComponent } from '@/sections/about-me/about-me.component';
import { ContactComponent } from '@/sections/contact/contact.component';
import { ExperienceComponent } from '@/sections/experience/experience.component';
import { LandingComponent } from '@/sections/landing/landing.component';
import { LayeredPeaks1Component } from '@/assets/backgrounds/layered-peaks-1.component';
import { LayeredPeaks2Component } from './assets/backgrounds/layered-peaks-2.component';
import { LayeredPeaks3Component } from './assets/backgrounds/layered-peaks-3.component';
import { NotificationComponent } from '@/components/notification/notification.component';
import { ProjectOverlayComponent } from '@/sections/projects/project-overlay/project-overlay.component';
import { ProjectsComponent } from '@/sections/projects/projects.component';
import { SkillsComponent } from '@/sections/skills/skills.component';
import { TechStackComponent } from './sections/tech-stack/tech-stack.component';
import { TopBarComponent } from '@/layouts/top-bar/top-bar.component';

import { ProjectService } from '@/services/project.service';
import { ThemeService } from '@/services/theme.service';
import { ThreeService } from '@/services/three.service';

@Component({
  selector: 'app-root',
  imports: [
    AboutMeComponent,
    ContactComponent,
    ExperienceComponent,
    LandingComponent,
    LayeredPeaks1Component,
    LayeredPeaks2Component,
    LayeredPeaks3Component,
    NotificationComponent,
    ProjectOverlayComponent,
    ProjectsComponent,
    SkillsComponent,
    TechStackComponent,
    TopBarComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  backgroundColor: Signal<string>;
  constructor(
    private themeService: ThemeService,
    protected projectService: ProjectService,
    private threeService: ThreeService,
  ) {
    this.backgroundColor = themeService.mountainBackgroundColor;
  }

  ngAfterViewInit(): void {
    this.threeService.init(document.body);
  }
}
