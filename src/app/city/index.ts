import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './reducers';
import { CityListComponent } from './citylist.component';
import { CityListEffects } from './effects/citylist.effects';

@NgModule({
    declarations: [
        CityListComponent],
    imports: [
        CommonModule,
        FormsModule,
        StoreModule.forFeature('cities', reducers),
        EffectsModule.forFeature([
            CityListEffects
        ]),
    ],
    providers: [
        //RateUnitTypeService
    ]
})
export class CityModule {
    
}