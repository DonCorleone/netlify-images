import { Injectable } from '@angular/core';
import netlifyIdentity from 'netlify-identity-widget';

@Injectable({
  providedIn: 'root',
})
export class NetlifyIdentityService {
  constructor() {
    // Initialize the Netlify Identity widget
    netlifyIdentity.init();
  }

  openModal() {
    // Opens the Netlify Identity modal
    netlifyIdentity.open();
  }

  closeModal() {
    // Closes the Netlify Identity modal
    netlifyIdentity.close();
  }

  getCurrentUser() {
    return netlifyIdentity.currentUser();
  }

  logout() {
    netlifyIdentity.logout();
  }

  onLogin(callback: (user: any) => void) {
    netlifyIdentity.on('login', callback);
  }

  onLogout(callback: () => void) {
    netlifyIdentity.on('logout', callback);
  }
}
