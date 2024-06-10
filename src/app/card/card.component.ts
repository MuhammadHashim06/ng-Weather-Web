import { Component, Input } from '@angular/core';
import { report } from '../services/models/report';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input()
  value?:any

}
