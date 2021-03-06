import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
//import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { RateUnitType } from './rateunittype';
import { environment } from '../../environments/environment';

@Injectable()
export class RateUnitTypeService {
    constructor(private http: HttpClient) {

    }

    getRateUnitTypes(): Observable<RateUnitType[]> {
        return this.http.get<RateUnitType[]>(environment.settings.rootApiUrl + 'rateunittype');

        // // TEMP: hard code a response for now.
        // let rateUnitType: RateUnitType = {
        //     id: 99,
        //     code: 'CWT',
        //     displayName: 'Per 100 lbs',
        //     description: 'Unit rate per 100 lbs',
        //     unitOfMeasure: 100,
        //     unitQuantity: 1
        // };
        
        // return Observable.create(obs => {
        //     obs.next(rateUnitType);
        //     obs.complete();
        // });   
    }
}