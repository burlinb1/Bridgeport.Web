import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RateUnitType } from './rateunittype';
import { RateUnitTypeComponent } from './rateunittype.component';
import { RateUnitTypeListComponent } from './rateunittypelist.component';
import { RateUnitTypeService } from './rateunittype.service';

@NgModule({
    declarations: [
        RateUnitTypeListComponent,
        RateUnitTypeComponent],
    imports: [CommonModule,FormsModule],
    providers: [RateUnitTypeService]
})
export class RateUnitTypeModule {
    
}