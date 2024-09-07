import { Injectable } from '@angular/core';
import * as netlifyIdentity from 'netlify-identity-widget';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = false;
  user: any = null;

  constructor() {
    netlifyIdentity.init();
  }

  authenticate(callback: (user: any) => void) {
    this.isAuthenticated = true;
    netlifyIdentity.open();
    netlifyIdentity.on('login', user => {
      this.user = user;
      callback(user);
    });
  }

  signout(callback: () => void) {
    this.isAuthenticated = false;
    netlifyIdentity.logout();
    netlifyIdentity.on('logout', () => {
      this.user = null;
      callback();
    });
  }
}
