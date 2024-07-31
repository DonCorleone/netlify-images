import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage],
  template: `
    <img ngSrc="/.netlify/images?url=assets/c835453375186b82045edd07b531584660ad0574-2400x1260.png" width="400" height="200" priority alt=""> <br />
    <img ngSrc="/.netlify/images?url=assets/c835453375186b82045edd07b531584660ad0574-2400x1260.png&fit=cover&w=50&h=50&position=left"  width="400" height="200"  priority alt="">
  `
,
  styles: ''
})
export class AppComponent {
  title = 'netlify-images';
}
