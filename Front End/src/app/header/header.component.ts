import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { UserFavorite } from '../model/userfavorite';
import { FavoriteService } from '../services/favorite.service';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  user:UserFavorite={}

   userName=localStorage.getItem("username")

  constructor(public authService:AuthService,private matDialog:MatDialog, private favoriteService:FavoriteService,private router:Router){}

  openlogin(){
    this.matDialog.open(LoginComponent,{
      width:'350px',
    })
  }

  openRegister(){
    this.matDialog.open(RegisterComponent,{
      width:'450px'
    })
  }

  // ngOnInit(){
    
  //   this.favoriteService.getUserByUserId().subscribe({
  //     next:data=>{
  //       this.user=data
  //     }
  //   })
  // }



  logout(){
    console.log("inside logout")
    localStorage.removeItem('token')
    localStorage.removeItem('message')
    localStorage.removeItem('username')
    localStorage.clear()
    console.log(localStorage.getItem('token'))
   if(this.authService.islogout()==false) {
    this.router.navigate([""])
    console.log(localStorage.getItem('username'))
   }
    
  }

  redirectToHome(){
    this.router.navigate([""])
  }

}
