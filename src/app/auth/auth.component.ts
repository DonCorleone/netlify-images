import {Component, OnInit} from '@angular/core';
import {NetlifyIdentityService} from "../services/auth.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './auth.component.html',
  styles: ``
})
export class AuthComponent implements OnInit {
  user: any;

  constructor(private netlifyIdentity: NetlifyIdentityService) {}

  ngOnInit(): void {
    // Check if the user is logged in when the component initializes
    this.user = this.netlifyIdentity.getCurrentUser();

    // Subscribe to login/logout events
    this.netlifyIdentity.onLogin((user) => {
      this.user = user;
    });

    this.netlifyIdentity.onLogout(() => {
      this.user = null;
    });
  }

  openIdentityModal() {
    this.netlifyIdentity.openModal();
  }

  logout() {
    this.netlifyIdentity.logout();
  }
}
