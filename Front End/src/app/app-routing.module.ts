import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { activateGuard } from './activate.guard';
import { canDeactivateGuard } from './can-deactivate.guard';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';

const routes: Routes = [

  {path:"",component:HomeComponent},
  {path:'restaurant/:id',component:RestaurantComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent,canDeactivate:[canDeactivateGuard]},
  {path:'favorite',component:FavoriteComponent,canActivate:[activateGuard]},
  {path:'favorite/restaurant/:id',component:RestaurantComponent},
  {path:'addToCart/:id/:id1',component:AddToCartComponent},
  {path:"**",component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
