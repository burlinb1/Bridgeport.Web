//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/startWith';
//import 'rxjs/add/operator/switchMap';
//import 'rxjs/add/operator/mergeMap';
//import 'rxjs/add/operator/toArray';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { City } from '../models/city';
import * as cityListActions from '../actions/citylist.actions';
import { CityService } from '../services/city.service';
import { toPayload } from '@ngrx/effects/src/util';

@Injectable()
export class CityListEffects {
    constructor(private actions$: Actions, private cityService: CityService) {
        
    }

    // Updates the state of rate unit type entities when SEARCH action is dispatched.
    // @Effect()
    // search$: Observable<Action> = this.actions$
    //     .ofType(cityListActions.SEARCH)
    //     .switchMap(() => {            
    //         return this.cityService.getCities()
    //             .map((cities: City[]) => new cityListActions.SearchComplete(cities))
    //     });

    @Effect()
    search$: Observable<Action> = this.actions$
        .ofType(cityListActions.SEARCH)
        .map(toPayload)     // ngrx function that maps the action payload
        .switchMap((payload) => {            
            return this.cityService.getCities(payload)
                .map((cities: City[]) => new cityListActions.SearchComplete(cities))
        });
}