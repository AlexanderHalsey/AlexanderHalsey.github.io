import { Component } from '@angular/core';

import { GithubIconComponent } from '@/assets/icons/github-icon.component';
import { LinkedInIconComponent } from '@/assets/icons/linkedin-icon.component';
import { PhoneIconComponent } from '@/assets/icons/phone-icon.component';

@Component({
  selector: 'app-contact-info',
  imports: [GithubIconComponent, LinkedInIconComponent, PhoneIconComponent],
  templateUrl: './contact-info.component.html',
})
export class ContactInfoComponent {}
