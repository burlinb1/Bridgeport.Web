import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { State } from './state.model';
import { environment } from '../../environments/environment';

@Injectable()
export class StateService {
    constructor(private http: HttpClient) {

    }

    getStates(searchText: string): Observable<State[]> {
        var url = environment.settings.rootApiUrl + 'state/';
        return this.http.get<State[]>(url);      
    }
}