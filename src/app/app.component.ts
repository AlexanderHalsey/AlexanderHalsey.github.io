import { Component, afterNextRender } from '@angular/core';

import { TopBarComponent } from "./top-bar/top-bar.component";
import { LandingComponent } from './landing/landing.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [
    AboutMeComponent,
    ContactComponent, 
    ExperienceComponent,
    LandingComponent,
    SkillsComponent, 
    TopBarComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}
