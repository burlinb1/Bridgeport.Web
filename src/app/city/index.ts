import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './reducers';
import { CityListComponent } from './citylist.component';
import { CityComponent } from './city.component';
import { CityDetailsComponent } from './city-details.component';
import { CityEffects } from './city.effects';
import { CityService } from './city.service';

@NgModule({
    declarations: [
        CityListComponent,
        CityComponent,
        CityDetailsComponent],
    imports: [
        CommonModule,
        FormsModule,
        StoreModule.forFeature('cities', reducers),
        EffectsModule.forFeature([
            CityEffects
        ]),
    ],
    providers: [
        CityService
    ]
})
export class CityModule {
    
}