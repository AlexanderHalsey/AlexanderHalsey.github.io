import { Component, computed, input } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';

import { ArrowRightIconComponent } from '@/assets/icons/arrow-right-icon.component';
import { BackendDevelopmentIconComponent } from '@/assets/icons/backend-development-icon.component';
import { CiCdIconComponent } from '@/assets/icons/ci-cd-icon.component';
import { ComputerIconComponent } from '@/assets/icons/computer-icon.component';
import { DayIconComponent } from '@/assets/icons/day-icon.component';
import { E2ETestingIconComponent } from '@/assets/icons/e2e-testing-icon.component';
import { GithubIconComponent } from '@/assets/icons/github-icon.component';
import { HamburgerIconComponent } from '@/assets/icons/hamburger-icon.component';
import { LinkedInIconComponent } from '@/assets/icons/linkedin-icon.component';
import { MobileDevelopmentIconComponent } from '@/assets/icons/mobile-development-icon.component';
import { NightIconComponent } from '@/assets/icons/night-icon.component';
import { PhoneIconComponent } from '@/assets/icons/phone-icon.component';
import { WebDevelopmentIconComponent } from '@/assets/icons/web-development-icon.component';

@Component({
  selector: 'app-icon',
  imports: [NgComponentOutlet],
  templateUrl: './icon.component.html',
})
export class IconComponent {
  iconName = input.required<(typeof iconOptions)[number]['name']>();
  size = input<string | number>('24');
  color = input<string>('currentcolor');

  icon = computed(() => iconOptions.find((icon) => icon.name === this.iconName())!);
  iconInputs = computed(() => ({
    size: this.size(),
    color: this.color(),
  }));
}

const iconOptions = [
  { name: 'arrow-right', component: ArrowRightIconComponent },
  { name: 'backend-development', component: BackendDevelopmentIconComponent },
  { name: 'ci-cd-pipelines', component: CiCdIconComponent },
  { name: 'computer', component: ComputerIconComponent },
  { name: 'day', component: DayIconComponent },
  { name: 'e2e-testing', component: E2ETestingIconComponent },
  { name: 'github', component: GithubIconComponent },
  { name: 'hamburger', component: HamburgerIconComponent },
  { name: 'linkedin', component: LinkedInIconComponent },
  { name: 'mobile-development', component: MobileDevelopmentIconComponent },
  { name: 'night', component: NightIconComponent },
  { name: 'phone', component: PhoneIconComponent },
  { name: 'web-development', component: WebDevelopmentIconComponent },
] as const;
