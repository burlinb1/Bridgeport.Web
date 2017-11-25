import { Component, OnInit } from '@angular/core';
import { RateUnitTypeService } from './rateunittype.service';
import { RateUnitType } from './rateunittype';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from '../state/reducers/';
import * as actionTypes from '../state/actions/rateunittype.action';

@Component({
    selector: 'rate-unit-type-list',
    templateUrl: './rateunittypelist.component.html'
})
export class RateUnitTypeListComponent implements OnInit {
    rateUnitTypes: Observable<RateUnitType[]>;

    constructor(private store: Store<fromRoot.IState>) {
        this.rateUnitTypes = store.select(fromRoot.getRateUnitTypesCollection);
    }

    ngOnInit() {
        //this.search();
        //this.store.dispatch(new actionTypes.SearchAction());
    }

    search() {        
        //this.rateUnitTypes = this.rateUnitTypeService.getRateUnitTypes();  
        this.store.dispatch(new actionTypes.SearchAction());          
    }
}