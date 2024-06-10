import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WeatherapiService } from '../services/weatherapi.service';
import { report } from '../services/models/report';
import { log } from 'console';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  @Output()
  dataChange: EventEmitter<any> = new EventEmitter<any>();

  city: string = 'Lahore';
  subscription: any;
  names: Array<any> = [];

  data: any
  // data: report = {
  //   location: {
  //     name: '',
  //     region: '',
  //     country: '',
  //     tz_id: '',
  //     localtime: ''
  //   },
  //   current: {
  //     lastupdate: '',
  //     temp_c: 0,
  //     temp_f: 0,
  //     condition: {
  //       text: '',
  //       icon: ''
  //     },
  //     wind_kph: 0,
  //     humidity: ''
  //   }
  // };

  constructor(private service: WeatherapiService) { }
  ngOnInit(): void {
    this.getvalue()
  }
  getvalue() {
    this.subscription = this.service.getweatherreport(this.city,7).subscribe({
      next: (result) => {
        this.emitdata(result)
      }
    });
    }

  emitdata(result: any) {
    this.dataChange.emit(result);
    this.subscription.unsubscribe()
  }
  async getnames() {
    this.service.getincompletecityname(this.city).subscribe({
      next: (result) => {
        this.names = result;
      }
    })
  }
}
