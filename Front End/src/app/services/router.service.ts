import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private routerService:Router) { }


 

  navigateToHomeView(){
    console.log("navigated to home view")
    this.routerService.navigate([""])
  }

  navigateToLoginView(){
    this.routerService.navigate(["login"])
  }

  navigateToRestaurantView(){
    this.routerService.navigate(["restaurant"])
  }

  navigateToRegisterView(){
    this.routerService.navigate(["register"])
  }

  navigateToFavoriteView(){
    this.routerService.navigate(["favorite"])
  }

  
}
