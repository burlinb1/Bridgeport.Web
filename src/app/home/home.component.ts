import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from '../logging/logging.service';
import { Store } from "@ngrx/store";
import { NavigationAction } from '../state/navigation.action';
import { navigationReducer } from '../state/navigation.reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    private unsubscribe = null;
    constructor(
        private logger: LoggingService,
        private store: Store<any>) {        
    }

    ngOnInit() {
        //this.logger.debug("Home page initialized");
        this.unsubscribe = this.store.subscribe(() => {
            var currentState = this.store.select(navigationReducer.name);
            //var action = currentState.actionsObserver.value.type
            //this.logger.debug(currentState);            
        });
    }    

    public onButtonClick() {
        //this.ping();
        this.store.dispatch(NavigationAction.navRequested('test'));
    }
    
    public onButtonClick2() {
        //this.ping();
        this.store.dispatch(NavigationAction.otherRequest('test'));
    }

    // ping() {
    //     this.http.get('http://jsonplaceholder.typicode.com/posts')
    //         .subscribe(
    //             data => console.log(data),
    //             err => console.log(err));
    // }
}
