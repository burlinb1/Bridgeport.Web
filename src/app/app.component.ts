import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './storage/storage.service';
import { NavmenuComponent } from './navmenu/navmenu.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Bridgeport';

    constructor(
        private storageService: StorageService,
        private http: HttpClient){
        //storageService.setAuthToken('mytoken');
    }

    // onButtonClick() {
    //     this.title = 'Hello from Kendo UI!';
    // }

    // public ping() {
    //     this.http.get('https://example.com/api/things')
    //       .subscribe(
    //         data => console.log(data),
    //         err => console.log(err)
    //       );
    //   }
}
