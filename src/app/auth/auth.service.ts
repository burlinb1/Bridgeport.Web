import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { StorageService } from '../storage/storage.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthService{
    constructor(private storageService: StorageService, private http: Http) {
    }

    public getToken() {
        return this.storageService.getAuthToken();
    }

    public isAuthenticated(): boolean {
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