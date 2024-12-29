import { Component, input } from '@angular/core';

import { MenuItem } from '@/models';

@Component({
  selector: 'app-menu-item',
  imports: [],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css',
})
export class MenuItemComponent<T extends MenuItem> {
  menuItem = input.required<T>();
}
