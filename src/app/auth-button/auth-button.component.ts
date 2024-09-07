import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {NgIf} from "@angular/common";
@Component({
  selector: 'app-auth-button',
  standalone: true,
  imports: [
    NgIf
  ],
  template: `
    <p *ngIf="authService.isAuthenticated">
      Welcome!
      <button (click)="signout()">Sign out</button>
    </p>
    <p *ngIf="!authService.isAuthenticated">You are not logged in.</p>
  `,
  styles: ``
})
export class AuthButtonComponent {
  constructor(public authService: AuthService, private router: Router) {}

  signout() {
    this.authService.signout(() => this.router.navigate(['/']));
  }
}
