import { Component, input, output } from '@angular/core';

import { DropdownMenuComponent } from '@/components/dropdown-menu/dropdown-menu.component';

import { HamburgerIconComponent } from '@/assets/icons/hamburger-icon.component';

import type { SelectorItem } from '@/shared/models';

@Component({
  selector: 'app-hamburger-menu',
  imports: [DropdownMenuComponent, HamburgerIconComponent],
  templateUrl: './hamburger-menu.component.html',
})
export class HamburgerMenuComponent<T extends SelectorItem> {
  selectorItems = input.required<T[]>();
  goTo = output<T>();
}
