import { Component, computed, Signal } from '@angular/core';

import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';

import { Theme, ThemeService } from '@/services/theme.service';

@Component({
  selector: 'app-contact',
  imports: [ContactFormComponent, ContactInfoComponent],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  theme: Signal<Theme>;
  backgroundColor: Signal<string>;
  constructor(private themeService: ThemeService) {
    this.theme = themeService.get('theme');
    this.backgroundColor = computed(() => themeService.backgroundColors().background2);
  }
}
