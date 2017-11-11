import { NgModule } from '@angular/core';
import { RateUnitType } from './rateunittype';
import { RateUnitTypeComponent } from './rateunittype.component';
import { RateUnitTypeService } from './rateunittype.service';

@NgModule({
    declarations: [RateUnitTypeComponent],
    providers: [RateUnitTypeService]
})
export class RateUnitTypeModule {
    
}