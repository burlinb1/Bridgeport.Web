import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '../logging/logging.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    constructor(
        private logger: LoggingService) {        
    }

    ngOnInit() {
        this.logger.debug("Home page initialized");
    }    

    // public onButtonClick() {
    //     this.ping();
    // }
    
    // ping() {
    //     this.http.get('http://jsonplaceholder.typicode.com/posts')
    //         .subscribe(
    //             data => console.log(data),
    //             err => console.log(err));
    // }
}
