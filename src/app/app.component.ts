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
    <app-auth-button></app-auth-button>
    <nav>
      <a routerLink="/public">Public Page</a>
      <a routerLink="/protected">Protected Page</a>
    </nav>
    <router-outlet></router-outlet>
  `
  ,
  styles: ''
})
export class AppComponent {
}
