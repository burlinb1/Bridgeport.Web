import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router, NavigationStart } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-navmenu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {
    enabled: boolean = false;
    visible: boolean = false;
    
    constructor(
        private authService: AuthService, 
        private router: Router) { 
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.visible = false;
            }            
        });
    }

    ngOnInit() {
        if (this.authService.isAuthenticated()) {
            this.enabled = true;
        }
    }    

    toggleMenu() {
        this.visible = !this.visible;       
    }
}
