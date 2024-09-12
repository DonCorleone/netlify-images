import {Component, OnInit} from '@angular/core';
import {NetlifyIdentityService} from "../services/auth.service";
import {NgIf} from "@angular/common";
import {GoTrueUser} from "../model/gotrue-user";
import {User} from "netlify-identity-widget";

@Component({
    selector: 'app-auth',
    standalone: true,
    imports: [
        NgIf
    ],
    template: `
        <div *ngIf="user">
            <p>Welcome, {{ user.user_metadata?.full_name }}</p>
            <button (click)="logout()">Logout</button>
        </div>
    `,
    styles: ``
})
export class AuthComponent implements OnInit {
    user: User | null = null;

    constructor(private netlifyIdentity: NetlifyIdentityService) {
    }

    ngOnInit(): void {
        // Check if the user is logged in when the component initializes
        this.user = this.netlifyIdentity.getCurrentUser();

        if (!this.user) {
            // If the user is not logged in, subscribe to login events
            this.openIdentityModal();
        }
        // Subscribe to login/logout events
        this.netlifyIdentity.onLogin((user) => {
            this.user = user;
        });

        this.netlifyIdentity.onLogout(() => {
            this.user = null;
            this.openIdentityModal();
        });
    }

    openIdentityModal() {
        this.netlifyIdentity.openModal();
    }

    logout() {
        this.netlifyIdentity.logout();
    }
}
