import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-weatherforcast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weatherforcast.component.html',
  styleUrl: './weatherforcast.component.scss'
})
export class WeatherforcastComponent implements OnChanges{

  @Input()
  value?:any

  hourlyreport: any
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value'] && this.value) {
      this.hourlyreport = this.value.forecast?.forecastday[0]?.hour;
    }
  }
}
