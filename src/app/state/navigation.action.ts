import { Injectable } from '@angular/core';

@Injectable()
export class NavigationAction {
    public static readonly NAV_REQUESTED: string = 'NAV_REQUESTED';
    public static readonly NAV_REQUESTED2: string = 'NAV_REQUESTED2';

    public static navRequested(url: string) {
        return {
            type: NavigationAction.NAV_REQUESTED,
            ur: url
        };
    }

    public static otherRequest(url: string) {
        return {
            type: NavigationAction.NAV_REQUESTED2,
            ur: url
        };
    }
}