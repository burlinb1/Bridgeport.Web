import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { 
    HttpRequest, 
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw'
//import { LoggingService } from '../logging/logging.service';
//import { Logger, Log } from 'oidc-client';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(
        public auth: AuthService, 
        private router: Router) {        
    }
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      
        if (!this.auth.loggedIn) {
            console.log('WARNING: user is NOT authenticated');
            // redirect home, which will redirect to auth login.
            this.router.navigate(['/home']);
        }

        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${this.auth.getToken()}`
            }
        });
      
        return next.handle(request)
            .catch((err: any) => {
                console.log(err);
                // redirect to home if Unauthorized response
                if (err.status == 401) {
                    // make sure current user is cleared and redirect to Home,
                    // which will trigger another auth redirect.                    
                    this.auth.loggedIn = false;
                    this.auth.userManager.removeUser()
                        .then(() => {
                            //this.auth.userManager.startSilentRenew();
                            this.router.navigate(['/home'])
                        });
                    //this.auth.startSigninMainWindow();
                }
                else {
                    //Other case throw an error
                    return Observable.throw(err);
                }                
            });
    }
}