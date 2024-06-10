import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyforecastComponent } from './weeklyforecast.component';

describe('WeeklyforecastComponent', () => {
  let component: WeeklyforecastComponent;
  let fixture: ComponentFixture<WeeklyforecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeeklyforecastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklyforecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
