import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';

@Injectable()
export class AuthService{
    constructor(private storageService: StorageService) {
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
}