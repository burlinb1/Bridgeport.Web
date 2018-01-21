import { Component, OnInit, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggingService } from '../logging/logging.service';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as cityActions from './city.actions';
import * as stateActions from '../state/state.actions';
import * as cityReducers from './reducers';
import * as stateReducers from '../state/reducers';
import { City } from '../city/city.model';
import { State } from '../state/state.model';

@Component({
    selector: 'city-edit',
    templateUrl: './city-edit.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityEditComponent implements OnInit {
    public city$: Observable<City>;
    public states$: Observable<State[]>;
    public onSave = new EventEmitter<City>()
    public loading: Observable<boolean>;
    private id: number;
    
    constructor(
        private store: Store<cityReducers.IState>,
        private route: ActivatedRoute, 
        private logger: LoggingService,
        private cd: ChangeDetectorRef) {
        
        this.id = route.snapshot.params['id'];        
    }

    ngOnInit() {
        // dispatch action which will trigger 'get' side effect.
        this.store.dispatch(new cityActions.Get(this.id));
        this.store.dispatch(new stateActions.GetAll());

        // listen for loading, edit
        this.loading = this.store.select(cityReducers.getEditLoading);
        this.city$ = this.store.select(cityReducers.getSelectedCity);
        this.states$ = this.store.select(stateReducers.getAllResults);
    }    

    save(cityForm) {
        this.logger.debug(cityForm);
        // var v = this.city.map((item) => {
        //     return Object.assign({}, item);
        // });
        
        // this.logger.debug(v);
    }
}