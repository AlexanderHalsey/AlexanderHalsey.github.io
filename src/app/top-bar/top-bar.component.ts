import { Component } from '@angular/core';

import type { MenuItem } from '../shared/models';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  menuItems: MenuItem[] = [
    { selector: '#aboutMe', name: 'About Me' },
    { selector: '#experience', name: 'Experience' },
    { selector: '#skills', name: 'Skills' },
    { selector: '#contact', name: 'Contact' },
  ]

  scrollTo(menuItem: MenuItem) {
    const element = document.querySelector(menuItem.selector);
    if (!element) {
      throw new Error(`Element with selector ${menuItem.selector} not found`);
    }
    const yOffset = -15;
    const top = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ behavior: 'smooth', top })
  }
}
