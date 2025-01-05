import {
  Component,
  contentChild,
  ElementRef,
  input,
  output,
  Renderer2,
  signal,
  viewChild,
  AfterContentChecked,
  Signal,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

import { ThemeService } from '@/services/theme.service';

import { MenuItem } from '@/models';

@Component({
  selector: 'app-dropdown-menu',
  imports: [NgTemplateOutlet],
  templateUrl: './dropdown-menu.component.html',
})
export class DropdownMenuComponent<T extends MenuItem> implements AfterContentChecked {
  menuItems = input.required<readonly T[]>();
  activatorTitle = input<string>();
  activeItem = input<T>();
  select = output<T>();

  toggleButton = viewChild<ElementRef<HTMLButtonElement>>('toggleButton');
  menu = viewChild<ElementRef<HTMLMenuElement>>('menu');
  activator = contentChild<ElementRef>('activator');

  isMenuOpen = signal(false);

  theme: Signal<string>;

  constructor(
    private renderer: Renderer2,
    private themeService: ThemeService,
  ) {
    this.theme = themeService.get('theme');
    this.renderer.listen('document', 'mousedown', (e: Event) => {
      const toggleButtonElement = this.toggleButton()?.nativeElement;
      const menuElement = this.menu()?.nativeElement;
      if (
        !!toggleButtonElement &&
        !!menuElement &&
        !toggleButtonElement.contains(e.target as Node) &&
        !menuElement.contains(e.target as Node)
      ) {
        this.isMenuOpen.set(false);
      }
    });
  }

  ngAfterContentChecked() {
    this.activator()?.nativeElement.addEventListener('click', (event: MouseEvent) => {
      event.stopImmediatePropagation();
      this.toggleMenuOpen(event, !this.isMenuOpen());
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
