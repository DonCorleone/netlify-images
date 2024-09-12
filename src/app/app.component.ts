import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {AuthComponent} from "./auth/auth.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, AuthComponent],
  template: `
    <app-auth></app-auth>
  `
  ,
  styles: `

  `
})
export class AppComponent {
}
