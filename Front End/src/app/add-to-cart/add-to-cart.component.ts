import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavoriteService } from '../services/favorite.service';
import { Dish } from '../model/dish';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent {

  dish:Dish={}

  constructor(private ar:ActivatedRoute, private favoriteService:FavoriteService ){

    this.ar.paramMap.subscribe((params:any)=>{
      let restaurantId=params.get('id')??0
      console.log("restaurantId"+restaurantId)

      let dishId=params.get('id1')??0
      console.log("dishId"+dishId);

      this.favoriteService.getDishById(restaurantId,dishId).subscribe({
        next:data=>{
          this.dish=data;
          console.log(data)
          console.log(this.dish);
          
          alert("dish added to cart")
        
        },
        error:error=>{
          alert("Failed to add dish to cart")
        }
      })
      
    })
  }

  ngOnInit(){
    
  }






}

