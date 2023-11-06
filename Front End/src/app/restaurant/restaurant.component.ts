import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RestaurantData } from '../model/restaurant-description';
import { RestaurantService } from '../services/restaurant.service';
import { AuthService } from '../services/auth.service';
import { FavoriteService } from '../services/favorite.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent {

  restaurant:RestaurantData={}

  constructor(private ar :ActivatedRoute,private restaurantService:RestaurantService, public authService:AuthService,private favoriteService:FavoriteService,private mb:MatSnackBar,private routerService:Router,private matDialog:MatDialog){}

  ngOnInit(){
    
    this.ar.paramMap.subscribe((data)=>{
      let id=data.get('id')??0
      console.log(id)
      this.restaurantService.getDataForId(+id).subscribe((data)=>{
        console.log(`restaurant data for 1 id`)
        this.restaurant=data
        console.log(this.restaurant)
      })
    })
  }

  // add to favrouites

  addToFavorites(){        
      
    this.favoriteService.saveRestaurantToUser(this.restaurant).subscribe({  // calling the method inside fav service
      next:data=>{
        this.mb.open('Restaurants successfully added!!', 'success', {
          duration: 5000,
          panelClass: ['mat-toolbar', 'mat-primary']
        });
      }
    })
  }


  login(){
    if(this.authService.isLoggedStatus==false){
      this.matDialog.open(LoginComponent,{
        width:'350px',
      })
    }
    else{
      this.restaurant
    }
  }

  //add dish to cart

  // dish?:Dish={}

  // addToCart(restaurantId?:number,dishId?:number){
  //   this.favoriteService.getDishById(restaurantId,dishId).subscribe({
  //     next:data=>{
  //       this.dish=data;
  //       alert("dish added to cart")
      
  //     },
  //     error:error=>{
  //       alert("Failed to add dish to cart")
  //     }
  //   })
  // }

  

  // @Output()

  // emitter=new EventEmitter<string>
  

  // delayEmit(){
  //   this.emitter.emit();
  // }
 




}
