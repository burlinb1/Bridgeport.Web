import { Component, OnInit } from '@angular/core';
import { RateUnitTypeService } from './rateunittype.service';
import { RateUnitType } from  './rateunittype';

@Component({
    selector: 'app-rateunittype',
    templateUrl: './rateunittype.component.html',
    styleUrls: ['./rateunittype.component.css']
})
export class RateUnitTypeComponent implements OnInit {
    //public rateUnitType: RateUnitType;

    constructor(private rateUnitTypeService: RateUnitTypeService) { 
  
    }

    ngOnInit() {
        // this.rateUnitTypeService.getRateUnitTypes()
        //     .subscribe( (result: RateUnitType) => {
        //         this.rateUnitType = result;
        //     });
    }
}
