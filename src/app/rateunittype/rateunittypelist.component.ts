import { Component, OnInit } from '@angular/core';
import { RateUnitTypeService } from './rateunittype.service';
import { RateUnitType } from './rateunittype';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRateUnitTypes from './reducers';
import * as actionTypes from './actions/rateunittype';

@Component({
    selector: 'rate-unit-type-list',
    templateUrl: './rateunittypelist.component.html'
})
export class RateUnitTypeListComponent implements OnInit {
    rateUnitTypes: Observable<RateUnitType[]>;

    constructor(private store: Store<fromRateUnitTypes.State>) {
        this.rateUnitTypes = store.select(fromRateUnitTypes.getRateUnitTypeSearchresults);
    }

    ngOnInit() {
    }

    search() {        
        this.store.dispatch(new actionTypes.Search(''));          
    }
}