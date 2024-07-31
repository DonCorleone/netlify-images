import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage],
  template: `
    <div style="width: 50px; height: 50px">
      <img [ngSrc]="imgUrlFixedWithParams" fill priority alt="" style="max-width: 50px; max-height: 50px" >
    </div>
    <div>
      <img [ngSrc]="imgUrlFixed" width="400" height="200" priority alt="">
    </div>
   `
,
  styles: ''
})
export class AppComponent {
  imgUrlFixed = '/.netlify/images?url=assets/c835453375186b82045edd07b531584660ad0574-2400x1260.png';
  imgUrlFixedWithParams = '/.netlify/images?url=assets/c835453375186b82045edd07b531584660ad0574-2400x1260.png&fit=cover&w=50&h=50&position=right';
}
