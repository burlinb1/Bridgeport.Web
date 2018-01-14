import { Injectable } from '@angular/core';
import { CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { LoggingService } from '../logging/logging.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthService, 
        private router: Router,
        private logger: LoggingService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        return this.checkLogin(url);
    }

    checkLogin(url: string) {
        if (this.authService.loggedIn) { 
            this.logger.debug("User is logged in");
            return true; 
        }
        
        // Navigate to the login page with extras
        this.authService.startSigninMainWindow();
        return false;
    }
}