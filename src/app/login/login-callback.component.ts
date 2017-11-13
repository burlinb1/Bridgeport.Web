import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'login-callback',
    template: `

    `
})
export class LoginCallbackComponent implements OnInit {    
    constructor(private authService: AuthService) {

    }

    ngOnInit() {
        this.authService.endSigninMainWindow();
    }
}
