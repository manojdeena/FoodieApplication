import { CanActivateFn } from '@angular/router';
import { AuthService } from './services/auth.service';
import { inject } from '@angular/core';
import { RouterService } from './services/router.service';

export const activateGuard: CanActivateFn = (route, state) => {

  const auth:AuthService=inject(AuthService)
  const router:RouterService=inject(RouterService)


  if(auth.isLoggedStatus==true){             //after login we are setting logged status to true, so since fav component is protected by auth guard , it checks wheather authguard returns true or false , based on the condiation we are navigating to fav component
    return true
  }
  else{
    router.navigateToLoginView
    return false
  }
  
};
