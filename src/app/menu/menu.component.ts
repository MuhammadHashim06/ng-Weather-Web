import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WeatherapiService } from '../services/weatherapi.service';
import { report } from '../services/models/report';
import { log } from 'console';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Output()
  dataChange: EventEmitter<report> = new EventEmitter<report>();

  data: report={
    location:{
      name: '',
      region: '',
      country: '',
      tz_id: '',
      localtime: ''
    },
    current: {
      lastupdate: '',
      temp_c: 0,
      temp_f: 0,
      condition:{
        text: '',
        icon: ''
      },
      wind_kph: 0,
      humidity: ''
    }
  };

  constructor(private service: WeatherapiService) {}
city:string='';

  subscription:any;
  getvalue() {
    this.subscription=this.service.getweatherreport(this.city).subscribe({
      next: (result) => {
         this.emitdata(result)       
      }
    });
  }

  emitdata(result:report){
    this.dataChange.emit(result);
    console.log(result);
    this.subscription.unsubscribe()
  }
}
