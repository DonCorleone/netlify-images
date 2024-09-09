import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import * as NetlifyIdentityWidget from "netlify-identity-widget"
import {AuthButtonComponent} from "./auth-button/auth-button.component";
import {RouterLink, RouterOutlet} from "@angular/router";
import {GoTrueUser} from "./model/gotrue-user";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgOptimizedImage, AuthButtonComponent, RouterLink, RouterOutlet],
  template: `
    <nav>
      <ul>
        <li>
          <div class="login" data-netlify-identity-button></div>
        </li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
    <!--app-auth-button></app-auth-button>
    <nav>
      <a routerLink="/public">Public Page</a>
      <a routerLink="/protected">Protected Page</a>
    </nav>
    <router-outlet></router-outlet-->
  `
  ,
  styles: `

  `
})
export class AppComponent implements OnInit {
  title = 'angular-netlify-identity';
  ngOnInit() {

    // read the jwt from the local storage
    const token: string | null = localStorage.getItem('gotrue.user');
    console.log('token ' + JSON.stringify(token));

    if (!token) {
      // if the jwt is not present, then get the jwt from the cookies
      NetlifyIdentityWidget.init();
      // read the jwt from the cookies
    }
  }
}
