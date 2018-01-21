import { Component, OnInit, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
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
            name: [this.city.name],
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
    
    // enables state dropdown bind to show selected option.
    stateListCompare(item1, item2): boolean {
        return item1 && item2 ? item1.id === item2.id : item1 === item2;
    }       

    save() {
        // pass the current form state to suscriber, who will
        // deal with processing the update.
        this.onSave.emit(this.editForm.value);
    }
}