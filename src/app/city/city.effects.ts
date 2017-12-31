//import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/startWith';
//import 'rxjs/add/operator/switchMap';
//import 'rxjs/add/operator/mergeMap';
//import 'rxjs/add/operator/toArray';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { City } from './city.model';
import * as cityListActions from './citylist.actions';
import { CityService } from './city.service';
import { toPayload } from '@ngrx/effects/src/util';

@Injectable()
export class CityEffects {
    constructor(private actions$: Actions, private cityService: CityService) {
        
    }

    // Updates the state of city entities when SEARCH action is dispatched.
    @Effect()
    search$: Observable<Action> = this.actions$
        .ofType(cityListActions.SEARCH)
        .map(toPayload)     // ngrx function that maps the action payload
        .switchMap((payload) => {            
            return this.cityService.getCities(payload)
                .map((cities: City[]) => new cityListActions.SearchComplete(cities))                
        });
    
    @Effect()
    edit$: Observable<Action> = this.actions$
        .ofType(cityListActions.GET)
        .map(toPayload)     // ngrx function that maps the action payload
        .switchMap((payload) => {            
            return this.cityService.getCity(payload)
                .map((city: City) => new cityListActions.GetComplete(city))
                //.catch(() => Observable.of({type: ''})))
        });
}