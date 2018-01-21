import { NgModule } from '@angular/core';
import { StateService } from './state.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './reducers';
import { StateEffects } from './state.effects';

@NgModule({
    declarations: [],
    imports: [
        StoreModule.forFeature('states', reducers),
        EffectsModule.forFeature([
            StateEffects
        ]),
    ],
    providers: [
        StateService
    ]
})
export class StateModule {
    
}