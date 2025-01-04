import { Component } from '@angular/core';

import { AboutMeComponent } from '@/sections/about-me/about-me.component';
import { ContactComponent } from '@/sections/contact/contact.component';
import { ExperienceComponent } from '@/sections/experience/experience.component';
import { LandingComponent } from '@/sections/landing/landing.component';
import { LayeredPeaks1Component } from '@/assets/backgrounds/layered-peaks-1.component';
import { LayeredPeaks2Component } from './assets/backgrounds/layered-peaks-2.component';
import { LayeredPeaks3Component } from './assets/backgrounds/layered-peaks-3.component';
import { SkillsComponent } from '@/sections/skills/skills.component';
import { TopBarComponent } from '@/layouts/top-bar/top-bar.component';

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
    SkillsComponent,
    TopBarComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}
