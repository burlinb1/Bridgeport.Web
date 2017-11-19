import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class StorageService {
    constructor(private localStorageService: LocalStorageService){
    }

    setAuthToken(token: any){
        this.localStorageService.set('authtoken', token);
    }

    setUserProfile(userProfile: any) {
        this.localStorageService.set('userprofile', userProfile);
    }

    getAuthToken(): any {
        return this.localStorageService.get('authtoken');
    }
}