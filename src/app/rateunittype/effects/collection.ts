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
import * as actionTypes from '../actions/collection';
import { RateUnitTypeService } from '../../rateunittype/rateunittype.service';
import { RateUnitType } from '../../rateunittype/rateunittype';

@Injectable()
export class RateUnitTypeCollectionEffects {
    constructor(
        private rateUnitTypeService: RateUnitTypeService,
        private actions$: Actions) {
    }

    @Effect()
    loadCollection$: Observable<Action> = this.actions$
      .ofType(actionTypes.LOAD)
      .switchMap(() =>
            this.rateUnitTypeService.getRateUnitTypes()
                .map((rateUnitTypes: RateUnitType[]) => new actionTypes.LoadSuccess(rateUnitTypes))                
      );
}