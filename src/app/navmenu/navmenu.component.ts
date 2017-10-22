import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-navmenu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {
    enabled: boolean = false;

    constructor(private authService: AuthService, private router: Router) { 
        var x= 0;
    }

    ngOnInit() {
        if (this.authService.isAuthenticated()) {
            this.enabled = true;
        }
    }

    goto(route: string) {
        //this.router.navigate(['/login']);
        //this.router.navigateByUrl(route);
    }
}
