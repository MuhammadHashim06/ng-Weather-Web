import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CardComponent } from './card/card.component';
import { WeatherforcastComponent } from './weatherforcast/weatherforcast.component';
import { WeeklyforecastComponent } from './weeklyforecast/weeklyforecast.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MenuComponent,CardComponent,WeatherforcastComponent,WeeklyforecastComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


  title = 'weatherapp';
  
  passvalue:any

  handleDataChange(data: any) {
    this.passvalue=data;
  }
  forcasttype:string="hourly"
  valuechange(event: any): void {
    this.forcasttype = event.target.value.toLowerCase();    
  }
  isActive(type: string): boolean {
    return this.forcasttype === type.toLowerCase();
  }
}
