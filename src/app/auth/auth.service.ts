import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { StorageService } from '../storage/storage.service';
import { Observable } from 'rxjs/Rx';
import { LoggingService } from '../logging/logging.service';

@Injectable()
export class AuthService{
    constructor(
        //private logger: LoggingService,
        private storageService: StorageService, 
        private http: Http) {
    }

    public getToken() {
        return this.storageService.getAuthToken();
    }

    public isAuthenticated(): boolean {
        //this.logger.debug("Checking isAuthenticated...");
        
        if (this.getToken()){
            return true;
        } else {
            return false;
        }
    }

    public authenticate(userName: string, password: string): Observable<boolean> {
        //this.http.post()
        return this.http.get('http://jsonplaceholder.typicode.com/posts')
            .map(() => {
                // replace this code with code to persist the token.
                //res.json();
                this.storageService.setAuthToken('TEST_TOKEN');
                return true;
            })
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}