import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WeatherapiService } from '../services/weatherapi.service';
import { report } from '../services/models/report';
import { log } from 'console';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {


  @Output()
  dataChange: EventEmitter<report> = new EventEmitter<report>();

  city:string='';
  subscription:any;
  names:Array<any>=[];


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
  async getnames() {
    console.log("I am called");
    
// let response=await fetch(`http://api.weatherapi.com/v1/search.json?key=ab5e441838fc45949bc90450240706&q=Lon`)
// let data=response.json();
// console.log(data);
this.service.getincompletecityname(this.city).subscribe({next:(result)=>{
  console.log(result);
}})

  }
}
