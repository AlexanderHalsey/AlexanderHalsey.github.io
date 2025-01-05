import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownMenuComponent } from './dropdown-menu.component';

import { MenuItem } from '@/models';

describe('DropdownMenuComponent', <T extends MenuItem>() => {
  let component: DropdownMenuComponent<T>;
  let fixture: ComponentFixture<DropdownMenuComponent<T>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DropdownMenuComponent<T>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
