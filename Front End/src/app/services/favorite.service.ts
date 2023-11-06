import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserFavorite } from '../model/userfavorite';
import { Observable } from 'rxjs';
import { RestaurantData } from '../model/restaurant-description';
import { User } from '../model/user';
import { Dish } from '../model/dish';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private http:HttpClient) { }

  url:string="http://localhost:9000/api/v2/register"                   

  registerUser(user:UserFavorite):Observable<UserFavorite>{            //on submit in resgister component
    return this.http.post<UserFavorite>(this.url,user)
  }



  urlPost:string="http://localhost:9000/api/v2/user/save"

  saveRestaurantToUser(restaurant:RestaurantData):Observable<any>{      // onSubmit Of Restaurant component, observable should be of   any type because it returns token
    return this.http.post<User>(this.urlPost,restaurant)
  }

  urlGet:string="http://localhost:9000/api/v2/user/get"

  getUserListOfResturant():Observable<RestaurantData[]>{              // ngOnInit of fav component   
    return this.http.get<RestaurantData[]>(this.urlGet)
  }


  urlGetUser:string="http://localhost:9000/api/v2/user/getUser"     // ngOnInIt of HeaderComponent

  getUserByUserId():Observable<UserFavorite>{
   return this.http.get<UserFavorite>(this.urlGetUser)
  }

  urlDeleteRestaurant:string="http://localhost:9000/api/v2/user/delete/"

  deleteRestaurantFromFavList(id?:number):Observable<UserFavorite>{
    return this.http.delete<UserFavorite>(`${this.urlDeleteRestaurant}/${id}`)
  }

  urlImage:string="http://localhost:9000/api/v2/upload"

  uploadImage(file:any):Observable<any>{
    console.log("inside upload service")
    return this.http.post<File>(this.urlImage,file)
  }



  urlGetDish:string="http://localhost:9000/api/v2/user/get/"

  getDishById(restaurantId?:number,dishId?:number):Observable<Dish>{
     return this.http.get<Dish>(`${this.urlGetDish}/${restaurantId}/${dishId}`)
  }

}
