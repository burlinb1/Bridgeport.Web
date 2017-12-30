import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as cityReducers from './reducers';
import * as cityListActions from './citylist.actions';
import { City } from './city.model';
import { Router } from '@angular/router';

@Component({
    selector: 'city-list',
    templateUrl: './citylist.component.html'
})
export class CityListComponent implements OnInit {
    loading: Observable<boolean>;
    cities: Observable<City[]>;
    searchText: string = "";

    constructor(
        private store: Store<cityReducers.IState>,
        private router: Router) {
        
            // wireup listener for changes to search results.
        this.cities = store.select(cityReducers.getSearchResults);
        this.loading = store.select(cityReducers.getLoading);
        // kick off a search right away.
        this.search();
    }

    ngOnInit() {
    }

    search() {
        this.store.dispatch(new cityListActions.Search(this.searchText));
    }

    edit(id: number) {
        //this.store.dispatch(new cityListActions.Get(id));
        this.router.navigate(['city/' + id]);
    }
}
