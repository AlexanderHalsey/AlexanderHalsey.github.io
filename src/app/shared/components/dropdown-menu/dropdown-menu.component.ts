import {
  Component,
  ElementRef,
  input,
  output,
  Renderer2,
  signal,
  viewChild,
  Signal,
} from '@angular/core';

import { ThemeService } from '@/services/theme.service';

import { MenuItem } from '@/models';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
})
export class DropdownMenuComponent<T extends MenuItem> {
  menuItems = input.required<T[]>();
  activatorTitle = input<string>();
  select = output<T>();

  toggleButton = viewChild<ElementRef<HTMLButtonElement>>('toggleButton');
  menu = viewChild<ElementRef<HTMLMenuElement>>('menu');

  isMenuOpen = signal(false);

  theme: Signal<string>;

  constructor(
    private renderer: Renderer2,
    private themeService: ThemeService,
  ) {
    this.theme = themeService.get('theme');
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

  toggleMenuOpen = (event: Event, isOpen: boolean) => {
    event.preventDefault();
    this.isMenuOpen.set(isOpen);
  };

  selectMenuItem = (event: MouseEvent, menuItem: T) => {
    event.preventDefault();
    this.select.emit(menuItem);
    this.isMenuOpen.set(false);
  };
}
