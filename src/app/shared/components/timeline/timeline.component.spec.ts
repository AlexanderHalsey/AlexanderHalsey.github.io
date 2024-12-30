import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineComponent } from './timeline.component';

import { TimelineItem } from '@/models';

describe('TimelineComponent', <T extends TimelineItem>() => {
  let component: TimelineComponent<T>;
  let fixture: ComponentFixture<TimelineComponent<T>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineComponent<T>],
    }).compileComponents();

    fixture = TestBed.createComponent(TimelineComponent<T>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
