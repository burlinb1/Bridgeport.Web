import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggingService } from '../logging/logging.service';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as cityActions from './city.actions';
import * as cityReducers from './reducers';
import { City } from '../city/city.model';

@Component({
    selector: 'city',
    templateUrl: './city.component.html'
})
export class CityComponent implements OnInit {
    public city: Observable<City>;
    public loading: Observable<boolean>;
    public completeTodo = new EventEmitter();
    private id: number;
    
    constructor(
        private store: Store<cityReducers.IState>,
        private route: ActivatedRoute, 
        private logger: LoggingService) {
        
        logger.debug(route.snapshot.params['id']);
        this.id = route.snapshot.params['id'];

        // dispatch 
        this.store.dispatch(new cityActions.Get(this.id));
        // listen for loading, edit
        this.loading = store.select(cityReducers.getEditLoading);
        this.city = store.select(cityReducers.getSelectedCity);
    }

    ngOnInit() {
    }    

    save() {
        // var v = this.city.map((item) => {
        //     return Object.assign({}, item);
        // });
        
        // this.logger.debug(v);
    }
}