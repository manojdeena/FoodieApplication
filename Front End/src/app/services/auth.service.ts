import { Injectable } from '@angular/core';
import { User} from '../model/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  url:string="http://localhost:9000/api/v1/login ";

  logIn(user:User):Observable<any>{
   return this.http.post<User>(this.url,user) // data we post is of user type the reponse coming from the backend is token so the return type should be any
  }


  isLoggedStatus=false;


  islogin(){
    return this.isLoggedStatus=true;
  }

  islogout(){
    console.log("called logout")
    console.log(localStorage.getItem('token'))
    if(localStorage.getItem('token')==null){
       this.isLoggedStatus=false;
    }

    return this.isLoggedStatus
    
  }
}
