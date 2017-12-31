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
import { LoggingService } from '../logging/logging.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(
        public auth: AuthService, 
        private router: Router) {        
    }
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      
        if (!this.auth.isAuthenticated()) {
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
            .do((event: HttpEvent<any>) => {
                // 
            }, (err: any) => {
                console.log(err);
                // redirect to home if Unauthorized response
                if (err.status == 401) {
                    this.router.navigate(['/home']);
                } 
                else {
                    // navigate to an unhandled error response page?
                }               
            });
    }
}