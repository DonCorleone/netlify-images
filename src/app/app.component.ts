import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";
import {AuthComponent} from "./auth/auth.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, RouterOutlet, AuthComponent],
  template: `
    <app-auth></app-auth>
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
export class AppComponent {

}
