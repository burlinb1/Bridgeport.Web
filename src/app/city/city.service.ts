import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { City } from './city.model';
import { environment } from '../../environments/environment';

@Injectable()
export class CityService {
    constructor(private http: HttpClient) {

    }

    getCities(searchText: string): Observable<City[]> {
        var url = environment.settings.rootApiUrl + 'city/?searchText=' + encodeURIComponent(searchText);
        return this.http.get<City[]>(url);      
    }

    getCity(id: number): Observable<City> {
        var url = environment.settings.rootApiUrl + 'city/' + id;
        return this.http.get<City>(url);
    }
}