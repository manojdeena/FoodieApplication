import { CanDeactivateFn } from '@angular/router';
import { RegisterComponent } from './register/register.component';

export const canDeactivateGuard: CanDeactivateFn<RegisterComponent> = (component:RegisterComponent, currentRoute, currentState, nextState) => {
  return component.canDeactivate();
};
