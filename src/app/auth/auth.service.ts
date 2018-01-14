import { Injectable } from '@angular/core';
//import { StorageService } from '../storage/storage.service';
//import { LoggingService } from '../logging/logging.service';
import { UserManager, Log, MetadataService, User } from 'oidc-client';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthService {
    public userManager: UserManager;
    public currentUser: User;
    public loggedIn = false;

    constructor(
        //private logger: LoggingService,
        //private storageService: StorageService, 
        private router: Router) {

        this.userManager = new UserManager({
            authority: environment.settings.rootAuthUrl,
            client_id: "js",
            redirect_uri: environment.settings.rootClientUrl + "logincallback",
            response_type: "id_token token",
            scope:"openid profile api1",
            post_logout_redirect_uri : environment.settings.rootClientUrl + "index.html",
            automaticSilentRenew: true,
            accessTokenExpiringNotificationTime: 4,
            silent_redirect_uri: environment.settings.rootClientUrl + "silent-renew.html"
        });

        this.userManager.events.addAccessTokenExpiring(function(){
            console.log('ACCESS TOKEN EXPIRING');
        });

        this.userManager.events.addSilentRenewError(function(err){
            console.log('SELENT RENEWAL ERROR', err);
        });

        this.userManager.getUser()
            .then((user) => {
                if (user) {
                    this.loggedIn = true;
                    this.currentUser = user;
                    //this.userLoadededEvent.emit(user);
                }
                else {
                    this.loggedIn = false;
                }
            })
            .catch((err) => {
                this.loggedIn = false;                
            });
    }

    public getToken() {
        // var token = this.storageService.getAuthToken();

        // if (token) {
        //     return token.access_token;
        // } else {
        //     return null;
        // }
        return this.currentUser.access_token;
    }    

    public isAuthenticated(): boolean {
        //this.logger.debug("Checking isAuthenticated...");  
        
        // var token = this.storageService.getAuthToken();    
        // if (token){
        //     var expires_at = token.expires_at;
            
        //     return true;
        // } else {
        //     return false;
        // }
        return this.loggedIn;
    }    

    startSigninMainWindow() {
        let _router = this.router;
        this.userManager.signinRedirect().then(function () {
          console.log("signinRedirect done");          
        }).catch(function (err) {
          console.log(err);
          _router.navigate(['error']);
        });
    }
  
    endSigninMainWindow() {
        this.userManager.signinRedirectCallback().then((user) => {
            console.log("signed in");

            // var authToken = {
            //     access_token: user.access_token,
            //     expires_at: user.expires_at,
            //     expires_in: user.expires_in
            // };
            
            // var userProfiler = {
            //     name: user.profile.name,
            //     preferred_username: user.profile.preferred_username
            // };

            // this.storageService.setAuthToken(authToken);
            // this.storageService.setUserProfile(userProfiler);

            this.router.navigate(['home']);
        }).catch(function (err) {
            // If we catch an error it may be because the auth server is down
            // at the moment.
            console.log(err);
            this.router.navigate(['error']);
        });
    }
}
