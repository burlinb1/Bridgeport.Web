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
    loading: Observable<boolean>;
    
    constructor(private store: Store<fromRateUnitTypes.IState>) {
        // wireup listener for changes to search results.
        this.rateUnitTypes = store.select(fromRateUnitTypes.getRateUnitTypeSearchresults);
        this.loading = store.select(fromRateUnitTypes.getLoading);
        // kick off a search right away.
        this.store.dispatch(new actionTypes.Search(''));
    }

    ngOnInit() {
    }

    search() {        
        this.store.dispatch(new actionTypes.Search(''));          
    }
}