import {Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {ProtectedComponent} from "./protected/protected.component";
import {PublicComponent} from "./public/public.component";
import {privateRouteGuard} from "./private-route.guard";

export const routes: Routes = [
  { path: 'public', component: PublicComponent },
  { path: 'protected', component: ProtectedComponent, canActivate: [privateRouteGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/public', pathMatch: 'full' }
];
