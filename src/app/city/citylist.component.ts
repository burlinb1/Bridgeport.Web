import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as cityReducers from './reducers';
import * as actions from './actions/citylist.actions';
import { City } from './models/city';

@Component({
    selector: 'city-list',
    templateUrl: './citylist.component.html'
})
export class CityListComponent implements OnInit {
    loading: Observable<boolean>;
    cities: Observable<City[]>;
    
    constructor(private store: Store<cityReducers.IState>) {
        // wireup listener for changes to search results.
        this.cities = store.select(cityReducers.getSearchResults);
        this.loading = store.select(cityReducers.getLoading);
        // kick off a search right away.
        this.search();
    }

    ngOnInit() {
    }

    search() {
        this.store.dispatch(new actions.Search(''));
    }
}
