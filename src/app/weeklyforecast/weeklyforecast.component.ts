import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges  } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-weeklyforecast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weeklyforecast.component.html',
  styleUrl: './weeklyforecast.component.scss'
})
export class WeeklyforecastComponent implements OnChanges {

  @Input() value: any;
  weeklyreport: Array <any>=[];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value'] && this.value && this.value.forecast && this.value.forecast.forecastday) {
      this.weeklyreport = this.value.forecast.forecastday;      
    }
  }
}