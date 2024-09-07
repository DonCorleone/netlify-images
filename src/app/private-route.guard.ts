import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "./services/auth.service";

export const privateRouteGuard: CanActivateFn = (route, state) => {    if (inject(AuthService).isAuthenticated) {
  return true;
} else {
  inject(Router).navigate(['/login'], { queryParams: { returnUrl: state.url } });
  return false;
}
};
