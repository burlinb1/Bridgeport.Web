import { Component, OnInit } from '@angular/core';
import { RateUnitTypeService } from './rateunittype.service';
import { RateUnitType } from './rateunittype';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'rate-unit-type-list',
    templateUrl: './rateunittypelist.component.html'
})
export class RateUnitTypeListComponent implements OnInit {
    rateUnitTypes: Observable<RateUnitType[]>;

    constructor(private rateUnitTypeService: RateUnitTypeService) {
        
    }

    ngOnInit() {
        this.search();
    }

    search() {
        this.rateUnitTypes = this.rateUnitTypeService.getRateUnitTypes();
        // this.rateUnitTypeService.getRateUnitTypes()
        //     .subscribe( (result: Observable<RateUnitType[]>) => {
        //         this.rateUnitTypes = result;
        // });        
    }
}