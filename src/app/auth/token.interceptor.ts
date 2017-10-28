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
            // redirect to login.
            //this.router.navigate(['/login']);
        }
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${this.auth.getToken()}`
            }
        });
      
        return next.handle(request);
    }
}