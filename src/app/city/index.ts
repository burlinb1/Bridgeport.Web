import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './reducers';
import { CityListComponent } from './citylist.component';
import { CityEditComponent } from './city-edit.component';
import { CityFormComponent } from './city-form.component';
import { CityEffects } from './city.effects';
import { CityService } from './city.service';

@NgModule({
    declarations: [
        CityListComponent,
        CityEditComponent,
        CityFormComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
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