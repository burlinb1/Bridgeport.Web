import { Injectable } from '@angular/core';
//import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { RateUnitType } from './rateunittype';

@Injectable()
export class RateUnitTypeService {
    constructor(private http: HttpClient) {

    }

    getRateUnitTypes(): Observable<any> {
        return this.http.get<any[]>('http://localhost:5001/rateunittype');
        
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