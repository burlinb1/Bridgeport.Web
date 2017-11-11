import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
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
        // TEMP: hard-code an observable to return True until I get
        // authorization integrated.
        //this.storageService.setAuthToken('96ab720ee96fa206d8e24dc83f06606859115d7904ea076bdfac063b455b955a');
        return Observable.create(obs => {
            obs.next(true);
            obs.complete();
        });   

        // var body = 'username=burlinb1%40hotmail.com&password=0cgAdmin%231&client_id=ro.client&client_secret=secret&scope=api1%20openid%20profile%20offline_access%20&grant_type=password';
        // var myheaders = new Headers();
        // myheaders.append('Content-Type', 'application/x-www-form-urlencoded');
        // //myheaders.append('Authorization', 'Bearer application/x-www-form-urlencoded');
        // var requestOptions = new RequestOptions();
        // //var headers = new HttpHeaders().set('Authorization', 'my-auth-token');
        // return this.http.post('http://localhost:52141/connect/token', body, requestOptions)
        //     .map(() => {
        //         // replace this code with code to persist the token.
        //         //res.json();
        //         this.storageService.setAuthToken('96ab720ee96fa206d8e24dc83f06606859115d7904ea076bdfac063b455b955a');
        //         return true;
        //     })
        //     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));    
    }
}