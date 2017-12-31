import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggingService } from '../logging/logging.service';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as cityReducers from './reducers';
import { City } from '../city/city.model';

@Component({
    selector: 'city',
    templateUrl: './city.component.html'
})
export class CityComponent implements OnInit {
    public city: Observable<City>;

    constructor(
        private store: Store<cityReducers.IState>,
        route: ActivatedRoute, 
        logger: LoggingService) {

        logger.debug(route.snapshot.params['id']);
        
        // dispatch 
        //this.city = store.select(cityReducers.getSearchResults);
    }

    ngOnInit() {
    }
}