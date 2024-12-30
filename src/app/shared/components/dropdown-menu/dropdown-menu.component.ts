import { Component, ElementRef, input, output, Renderer2, signal, viewChild } from '@angular/core';

import { MenuItemComponent } from '../menu-item/menu-item.component';

import { MenuItem } from '@/models';

@Component({
  selector: 'app-dropdown-menu',
  imports: [MenuItemComponent],
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.css',
})
export class DropdownMenuComponent<T extends MenuItem> {
  menuItems = input.required<T[]>();
  activatorTitle = input<string>();
  select = output<T>();

  toggleButton = viewChild<ElementRef<HTMLButtonElement>>('toggleButton');
  menu = viewChild<ElementRef<HTMLMenuElement>>('menu');

  isMenuOpen = signal(false);

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      const toggleButtonElement = this.toggleButton()?.nativeElement;
      const menuElement = this.menu()?.nativeElement;
      if (
        !!toggleButtonElement &&
        !!menuElement &&
        e.target !== toggleButtonElement &&
        e.target !== menuElement
      ) {
        this.isMenuOpen.set(false);
      }
    });
  }

  toggleMenuOpen = (event: MouseEvent, isOpen: boolean) => {
    event.preventDefault();
    this.isMenuOpen.set(isOpen);
  };

  selectMenuItem = (event: MouseEvent, menuItem: T) => {
    event.preventDefault();
    this.select.emit(menuItem);
    this.isMenuOpen.set(false);
  };
}
