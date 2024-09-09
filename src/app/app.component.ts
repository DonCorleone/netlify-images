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
    <div class="content">
      <h1 class="title">Angular Netlify Identity Demo</h1>
      <iframe
        src="https://giphy.com/embed/IbHargNoRiQvmnGyj7"
        width="300px"
        height="250px"
        frameBorder="0"
      ></iframe>
      <div class="text">
        <p>
          Welcome to the Angular Netlify Identity Demo, glad to have you here! You
          can find the
          <a href="https://github.com/tzmanics/angular-netlify-identity-demo"
          >repo for this project here!</a
          >
        </p>
        <p>
          (つ・▽・)つ⊂(・▽・⊂)
        </p>

        <p>
          You can learn more about
          <a
            href="https://docs.netlify.com/visitor-access/identity/?utm_source=blog&utm_medium=angular-identity-tzm&utm_campaign=devex"
          >Netlify Identity</a
          >
          and Angular in
          <a
            href="https://www.netlify.app/blog/2020/07/02/authenticating-users-with-angular-and-netlify-identity/?utm_source=blog&utm_medium=angular-identity-tzm&utm_campaign=devex"
          >this blog post</a
          >
          ヽ(´∇｀)ﾉ
        </p>
      </div>
    </div>
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
export class AppComponent {
}
