import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { report } from './models/report';

@Injectable({
  providedIn: 'root'
})
export class WeatherapiService{

  constructor(private http:HttpClient) { }
  getweatherreport(city:string){
    const baseurl=`http://api.weatherapi.com/v1/current.json?key=ab5e441838fc45949bc90450240706&q=${city}`;
   return this.http.get<report>(baseurl);
    
  }
}
