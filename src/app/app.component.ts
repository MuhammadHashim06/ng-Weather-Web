import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CardComponent } from './card/card.component';
import { report } from './services/models/report';
import { WeatherforcastComponent } from './weatherforcast/weatherforcast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MenuComponent,CardComponent,WeatherforcastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'weatherapp';
  
  passvalue:any

  handleDataChange(data: any) {
    this.passvalue=data;
  }
}
