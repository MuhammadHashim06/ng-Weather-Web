import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { report } from './models/report';

@Injectable({
  providedIn: 'root'
})
export class WeatherapiService {

  constructor(private http: HttpClient) { }
  getweatherreport(city: string,days:number=1) {
    let forcasturl=`http://api.weatherapi.com/v1/forecast.json?key=ab5e441838fc45949bc90450240706&q=${city}&days=${days}&aqi=no&alerts=no`
    const baseurl = `http://api.weatherapi.com/v1/current.json?key=ab5e441838fc45949bc90450240706&q=${city}`;
    return this.http.get<any>(forcasturl);
  }
  getincompletecityname(city: string) {
    const baseurl = `http://api.weatherapi.com/v1/search.json?key=ab5e441838fc45949bc90450240706&q=${city}`;
    return this.http.get<any>(baseurl);
  }
}
