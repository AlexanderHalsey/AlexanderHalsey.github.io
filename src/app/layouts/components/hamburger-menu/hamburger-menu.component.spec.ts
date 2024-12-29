import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburgerMenuComponent } from './hamburger-menu.component';

import { SelectorItem } from '@/models';

describe('HamburgerMenuComponent', <T extends SelectorItem>() => {
  let component: HamburgerMenuComponent<T>;
  let fixture: ComponentFixture<HamburgerMenuComponent<T>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HamburgerMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HamburgerMenuComponent<T>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
