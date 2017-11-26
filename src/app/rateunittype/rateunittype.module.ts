import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RateUnitType } from './rateunittype';
import { RateUnitTypeComponent } from './rateunittype.component';
import { RateUnitTypeListComponent } from './rateunittypelist.component';
import { RateUnitTypeService } from './rateunittype.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './reducers';
import { RateUnitTypeEffects } from './effects/rateunittype';

@NgModule({
    declarations: [
        RateUnitTypeListComponent,
        RateUnitTypeComponent],
    imports: [
        CommonModule,
        FormsModule,
        StoreModule.forFeature('rateUnitTypes', reducers),
        EffectsModule.forFeature([
            RateUnitTypeEffects
        ]),
    ],
    providers: [RateUnitTypeService]
})
export class RateUnitTypeModule {
    
}