import { Component } from '@angular/core';

import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';

@Component({
  selector: 'app-contact',
  imports: [ContactFormComponent, ContactInfoComponent],
  templateUrl: './contact.component.html',
})
export class ContactComponent {}
