import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CardComponent } from './card/card.component';
import { report } from './services/models/report';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MenuComponent,CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'weatherapp';
  
  passvalue?:report

  handleDataChange(data: report) {
    this.passvalue=data;
    console.log(data);
  }
}
