import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'error',
    templateUrl: 'error.html'
})
export class ErrorComponent implements OnInit {
    constructor() {
        //this.isProdEnvironment = route.snapshot.data[0]['isProd'];
    }
    ngOnInit() {        
    }
}