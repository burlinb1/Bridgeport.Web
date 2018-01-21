import { Component, OnInit, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { City } from './city.model';
import { State } from '../state/state.model';

@Component({
    selector: 'city-form',
    templateUrl: './city-form.component.html'
})
export class CityFormComponent implements OnInit, OnChanges {
    @Input() city: City = {
        id: -1,
        name: '',
        stateId: -1
    };

    @Input() states: State[];

    @Output() onSave = new EventEmitter<City>();

    public editForm: FormGroup;

    constructor(public formBuilder: FormBuilder) {
        this.editForm = this.formBuilder.group({
            'name': [this.city.name],
            'id': [this.city.id],
            'stateId': [this.city.stateId]
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
        // pass the current form state to suscriber, who will
        // deal with processing the update.
        this.onSave.emit(this.editForm.value);
    }
}