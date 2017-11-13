import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private authService: AuthService, private router: Router) { }

    userName: string = '';
    password: string = '';

    ngOnInit() {
    }

    login(){
        console.log('Logging in as ' + this.userName);
        this.authService.startSigninMainWindow();
        // this.authService.authenticate(this.userName, this.password)
        //     .subscribe((res) => {
        //         console.log("Login successful");
        //         //this.router.navigate(['/home']);
        //         // TODO: this is a workaround to force app to go through bootstrapping again
        //         // so that the main menu gets enabled only after authenticating. This will
        //         // change when actual authentication is integrated.
        //         window.location.href  = "/home";
        //     });
    }
}
