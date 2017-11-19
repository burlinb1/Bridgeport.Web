import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
//import { LoggingService } from '../logging/logging.service';
import { UserManager, Log, MetadataService, User } from 'oidc-client';
import { Router } from '@angular/router';

@Injectable()
export class AuthService{
    public _mgr: UserManager;
    
    constructor(
        //private logger: LoggingService,
        private storageService: StorageService, 
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

    startSigninMainWindow() {
        this._mgr.signinRedirect().then(function () {
          console.log("signinRedirect done");          
        }).catch(function (err) {
          console.log(err);
        });
    }
  
    endSigninMainWindow() {
        this._mgr.signinRedirectCallback().then((user) => {
            console.log("signed in");

            var authToken = {
                access_token: user.access_token,
                expires_at: user.expires_at
            };
            
            var userProfiler = {
                name: user.profile.name,
                preferred_username: user.profile.preferred_username
            };

            this.storageService.setAuthToken(authToken);
            this.storageService.setUserProfile(userProfiler);

            this.router.navigate(['home']);
        }).catch(function (err) {
            console.log(err);
        });
    }
}
