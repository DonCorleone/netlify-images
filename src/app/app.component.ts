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
          <div class="login" data-netlify-identity-button>whatthefuck</div>
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

  constructor() {

  }

  ngOnInit() {

    NetlifyIdentityWidget.on('open', () => {
      console.log('Widget opened'); // Do something when the widget opens
    });
    NetlifyIdentityWidget.on('close', () => {
      console.log('Widget closed'); // Do something when the widget closes
    });
    NetlifyIdentityWidget.on('init', user => {
      console.log('Widget initialized'); // Do something when the widget initializes
    });
    NetlifyIdentityWidget.on('login', user => {
      console.log('Widget logged in'); // Do something when the user logs in
    });
    NetlifyIdentityWidget.on('logout', () => {
      console.log('Widget logged out'); // Do something when the user logs out
    });
    NetlifyIdentityWidget.on('error', err => {
      console.error('Widget error', err); // Do something with the error
    });

    // read the jwt from the local storage
    const token: string | null = localStorage.getItem('gotrue.user');
    console.log('token ' + JSON.stringify(token));

    if (!token) {

      NetlifyIdentityWidget.init();
    }
  }
}
