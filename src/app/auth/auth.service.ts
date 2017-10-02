import { Injectable } from '@angular/core';

@Injectable()
export class AuthService{

    public getToken(): string {
        return "authtoken";
    }

    public isAuthenticated(): boolean {
        return false;
    }
}