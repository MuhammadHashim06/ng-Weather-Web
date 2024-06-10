import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherforcastComponent } from './weatherforcast.component';

describe('WeatherforcastComponent', () => {
  let component: WeatherforcastComponent;
  let fixture: ComponentFixture<WeatherforcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherforcastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherforcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
