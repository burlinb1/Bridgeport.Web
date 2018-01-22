import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { City } from './city.model';
import * as cityActions from './city.actions';
import { CityService } from './city.service';
import { toPayload } from '@ngrx/effects/src/util';

@Injectable()
export class CityEffects {
    constructor(private actions$: Actions, private cityService: CityService) {
        
    }

    // Updates the state of city entities when SEARCH action is dispatched.
    @Effect()
    search$: Observable<Action> = this.actions$
        .ofType(cityActions.SEARCH)
        .map(toPayload)     // ngrx function that maps the action payload
        .switchMap((payload) => {            
            return this.cityService.getCities(payload)
                .map((cities: City[]) => new cityActions.SearchComplete(cities))                
        });
    
    @Effect()
    edit$: Observable<Action> = this.actions$
        .ofType(cityActions.GET)
        .map(toPayload)     // ngrx function that maps the action payload
        .switchMap((payload) => {            
            return this.cityService.getCity(payload)
                .map((city: City) => new cityActions.GetComplete(city))
        });
}