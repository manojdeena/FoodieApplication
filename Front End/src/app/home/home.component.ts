import { Component } from '@angular/core';
import { RestaurantData } from '../model/restaurant-description';
import { RestaurantService } from '../services/restaurant.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private restaurantService:RestaurantService,public authService:AuthService){}

  restaurant:RestaurantData[]=[]



  ngOnInit(){
   const localToken=localStorage.getItem('token');
   console.log(localToken)
   this.restaurantService.getData().subscribe({
    next:data=>{
      this.restaurant=data
      
    },
    error: error=>{
      alert("Failed to Fetch Restaurants Due to Server Error !!")
    }
   }) 

  }
  reload(){
    
    localStorage.clear()
    localStorage.removeItem('token')
    localStorage.removeItem('message')
    localStorage.removeItem('username')
  }
 


  searchRestaurant(searchText:string){

    console.log("captured")
    if(searchText==""){
      this.restaurant=this.restaurant
    }
    else{
      this.restaurantService.getData().subscribe((filteredRestaurant)=>{
        this.restaurant=filteredRestaurant.filter(restaurant=>
          restaurant.restaurantName?.toLowerCase().startsWith(searchText.toLowerCase())
        )
      })

      console.log(this.restaurant)
      
    }

  }

  searchInput:string=""

  onfilter(){
    
    this.restaurantService.getData().subscribe((filterRestaurant=>{
      this.restaurant=filterRestaurant.filter(restaurant=>
        restaurant.location?.startsWith(this.searchInput)
        )
    }))
  }
}
