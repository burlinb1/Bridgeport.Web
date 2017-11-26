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
import * as actionTypes from '../actions/rateunittype';
import { RateUnitTypeService } from '../rateunittype.service';
import { RateUnitType } from '../rateunittype';

@Injectable()
export class RateUnitTypeEffects {
    constructor(
        private rateUnitTypeService: RateUnitTypeService,
        private actions$: Actions) {
    }

    // Updates the state of rate unit type entities when SEARCH action is dispatched.
    @Effect()
    search$: Observable<Action> = this.actions$
        .ofType(actionTypes.SEARCH)
        .switchMap(() => {
            return this.rateUnitTypeService.getRateUnitTypes()
                .map((rateUnitTypes: RateUnitType[]) => new actionTypes.SearchComplete(rateUnitTypes))
        });
}