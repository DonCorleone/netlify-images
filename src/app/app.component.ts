import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

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
  `
  ,
  styles: ''
})
export class AppComponent {
  imgUrlFixedWithParams = 'https://netlify-images.netlify.app/.netlify/images?url=assets/c835453375186b82045edd07b531584660ad0574-2400x1260.png?width=50&height=50';
  imgUrlFixed = 'https://netlify-images.netlify.app/.netlify/images?url=assets/c835453375186b82045edd07b531584660ad0574-2400x1260.png';
}
