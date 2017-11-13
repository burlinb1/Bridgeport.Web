import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { StorageService } from '../storage/storage.service';
import { Observable } from 'rxjs/Rx';
import { LoggingService } from '../logging/logging.service';
import { UserManager, Log, MetadataService, User } from 'oidc-client';
import { Router } from '@angular/router';

@Injectable()
export class AuthService{
    public _mgr: UserManager;
    
    constructor(
        //private logger: LoggingService,
        private storageService: StorageService, 
        private http: Http,
        private router: Router) {

        this._mgr = new UserManager({
            authority: "http://localhost:5000",
            client_id: "js",
            redirect_uri: "http://localhost:4200/logincallback",
            response_type: "id_token token",
            scope:"openid profile api1",
            post_logout_redirect_uri : "http://localhost:4200/index.html",
        });
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

    startSigninMainWindow() {
        this._mgr.signinRedirect({ data: 'some data' }).then(function () {
          console.log("signinRedirect done");          
        }).catch(function (err) {
          console.log(err);
        });
    }
  
    endSigninMainWindow() {
        //TODO: Validate why in a promise a global variable is not accessible,
        //      instead a method scope variable is required so it can be used within
        //      the promise.
        //Answer: the previous code was using function (user) { } instead of just (user) =>
        //        because is a function that only has one parameter (user) that explains
        //        why the other variables were undefined, the fix was to use an anonymous function
        //        a lambda expression.
        
        //TODO: Validate why even though _mgr has already been instantiated, I need to enclose
        //      the call in !== undefined, removing the if clause results in a failure of _mgr
        //      is undefined
        //if (typeof window !== 'undefined') {
          this._mgr.signinRedirectCallback().then((user) => {
            console.log("signed in");
            //this._loggedIn = true;
            //this._globalEventsManager.showNavBar(this._loggedIn);
            this.storageService.setAuthToken(user.access_token);
            this.router.navigate(['home']);
          }).catch(function (err) {
            console.log(err);
          });
        //}
    }
}
