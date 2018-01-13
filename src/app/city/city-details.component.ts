import { Component, OnInit, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { City } from './city.model';

@Component({
    selector: 'city-details',
    templateUrl: './city-details.component.html'
})
export class CityDetailsComponent implements OnInit {
    @Input() city: City;
    @Output() onSave = new EventEmitter<City>();

    public editCity: City = new City();
    constructor() {
    }

    ngOnInit() {        
    }    

    save() {
        this.onSave.emit(this.editCity)
    }
}