import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { City } from '../models/city';
import * as cityListActions from '../actions/citylist.actions';

@Injectable()
export class CityListEffects {
    constructor(private actions$: Actions) {
        
    }

    // Updates the state of rate unit type entities when SEARCH action is dispatched.
    @Effect()
    search$: Observable<Action> = this.actions$
        .ofType(cityListActions.SEARCH)
        .switchMap(() => {
            return Observable.create(obs => {
                obs.next([{ id: 1, name: 'Tacoma', statId: 99}]);
                obs.complete();
            })
            .map((cities: City[]) => new cityListActions.SearchComplete(cities));
            
            // return this.rateUnitTypeService.getRateUnitTypes()
            //     .map((rateUnitTypes: RateUnitType[]) => new actionTypes.SearchComplete(rateUnitTypes))
        });
}