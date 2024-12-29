import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemComponent } from './menu-item.component';

import { MenuItem } from '@/models';

describe('MenuItemComponent', <T extends MenuItem>() => {
  let component: MenuItemComponent<T>;
  let fixture: ComponentFixture<MenuItemComponent<T>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuItemComponent<T>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
