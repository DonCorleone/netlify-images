import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import * as NetlifyIdentityWidget from "netlify-identity-widget"
import {AuthButtonComponent} from "./auth-button/auth-button.component";
import {RouterLink, RouterOutlet} from "@angular/router";
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
    .content {
      font-size: 20px;
      margin: 0 auto;
      max-width: 800px;
      width: 80%;
    }
    .gif {
      position: absolute;
      top: 5px;
      left: 300px;
    }
    .title {
      float: left;
      margin: 0;
      width: 200px;
    }
    .text {
      margin: 0 auto;
      width: 70%;
    }
  `
})
export class AppComponent implements OnInit {
  title = 'angular-netlify-identity';
  ngOnInit() {
    // read the jwt from the cookies
    const jwt = NetlifyIdentityWidget.currentUser()?.token?.access_token;

    console.log(jwt);
    // if the jwt is present, then set it in the local storage
    if (jwt) {
      localStorage.setItem('token', jwt);
    }
  }
}
