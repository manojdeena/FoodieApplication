import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestaurantData } from '../model/restaurant-description';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http:HttpClient) { }

  url:string=" http://localhost:9000/api/v3/get"

  getData():Observable<RestaurantData[]>{
    return this.http.get<RestaurantData[]>(this.url)
  }

  urlGetForId:string="http://localhost:9000/api/v3/get/"

  getDataForId(id? :number):Observable<RestaurantData>{
    console.log(`method invoked`)
      return this.http.get<RestaurantData>(`${this.urlGetForId}/${id}`);
  }


  
}
