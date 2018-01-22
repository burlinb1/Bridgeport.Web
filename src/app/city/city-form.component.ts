import { Component, OnInit, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { City } from './city.model';
import { State } from '../state/state.model';

@Component({
    selector: 'city-form',
    templateUrl: './city-form.component.html'
})
export class CityFormComponent implements OnChanges {
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
            name: [this.city.name, Validators.required  ],
            id: [this.city.id],
            stateId: [this.city.stateId],
            stateList: this.formBuilder.array([])
        });
    }
    
    // This will fire when the container control passes the
    // city observable, then bind the form controls.
    ngOnChanges() {
        if(this.city) {
            this.editForm.patchValue(this.city);
        }
        
        if(this.states) {
            this.states.forEach((state) => {
                this.stateList.push(
                     this.formBuilder.control({
                          id: state.id,
                          name: state.name
                        }));
                  });            
        }
    }

    // Used as the binding attribute for the state dropdown,
    // required because we're binding a reactive form to an observable list.
    // For good example see: https://plnkr.co/edit/yIuQfRh7puq75e9VYKqZ?p=preview
    public get stateList(): FormArray {
        return this.editForm.get("stateList") as FormArray;
    }
    
    public get name() { return this.editForm.get('name'); }

    // enables state dropdown bind to show selected option.
    // stateListCompare(item1, item2): boolean {
    //     return item1 && item2 ? item1.id === item2 : item1 === item2;
    // }           

    save() {
        // validation has already been done if Save is enabled,
        // so notify subscriber that save was clicked.
        this.onSave.emit(this.editForm.value);
    }
}