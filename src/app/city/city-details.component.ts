import { Component, OnInit, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { City } from './city.model';

@Component({
    selector: 'city-details',
    templateUrl: './city-details.component.html'
})
export class CityDetailsComponent implements OnInit, OnChanges {
    @Input() city: City = {
        id: -1,
        name: '',
        stateId: -1
    };

    @Output() onSave = new EventEmitter<City>();

    public editForm: FormGroup;

    constructor(public formBuilder: FormBuilder) {
        console.log("CITY:", this.city);
        this.editForm = this.formBuilder.group({
            'name': [this.city.name]
        });
    }
    
    // This will fire when the container control passes the
    // city observable, then bind the form controls.
    ngOnChanges() {
        if(this.city) {
            this.editForm.patchValue(this.city);
        }
    }

    ngOnInit() {        
    }    

    save() {
        //this.onSave.emit(this.editCity)
    }
}