import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import * as NetlifyIdentityWidget from "netlify-identity-widget"
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <div>
      <img [ngSrc]="imgUrlFixedWithParams" width="50" height="50" priority alt="" style="object-fit:fill">
    </div>
    <div>
      <img [ngSrc]="imgUrlFixed" width="400" height="200" priority alt="">
    </div>
    <div id="netlify-modal">
    </div>
  `
  ,
  styles: ''
})
export class AppComponent implements OnInit {
  imgUrlFixedWithParams = 'https://netlify-images.netlify.app/.netlify/images?url=assets/c835453375186b82045edd07b531584660ad0574-2400x1260.png?width=50&height=50';
  imgUrlFixed = 'https://netlify-images.netlify.app/.netlify/images?url=assets/c835453375186b82045edd07b531584660ad0574-2400x1260.png';


  ngOnInit() {
    NetlifyIdentityWidget.init({
      container: '#netlify-modal', // defaults to document.body
      locale: 'en' // defaults to 'en'
    });

    NetlifyIdentityWidget.open(); // open the modal

    NetlifyIdentityWidget.on('init', user => console.log('init', user));
    NetlifyIdentityWidget.on('login', user => console.log('login', user));
    NetlifyIdentityWidget.on('logout', () => console.log('Logged out'));
    NetlifyIdentityWidget.on('error', err => console.error('Error', err));
    NetlifyIdentityWidget.on('open', () => console.log('Widget opened'));
    NetlifyIdentityWidget.on('close', () => console.log('Widget closed'));
  }
}
