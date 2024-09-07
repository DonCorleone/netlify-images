import { Component } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  template: `
    <div>
      <p>You must log in to view the page at {{ returnUrl }}</p>
      <button (click)="login()">Log in</button>
    </div>
  `,
  styles: ``
})
export class LoginComponent {
  returnUrl: string;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.authService.authenticate(() => this.router.navigate([this.returnUrl]));
  }
}
