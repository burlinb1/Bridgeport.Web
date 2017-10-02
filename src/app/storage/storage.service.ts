import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class StorageService {
    constructor(private localStorageService: LocalStorageService){
    }

    setAuthToken(token: string){
        this.localStorageService.set("authtoken", token);
    }
}