import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './routing/app.routing.module';
//import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoggingModule } from './logging/logging.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { HomeComponent } from './home/home.component';
import { LocalStorageModule } from 'angular-2-local-storage';
import { StorageService } from './storage/storage.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './auth/token.interceptor';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { StoreModule } from '@ngrx/store';
import { RateUnitTypeModule } from './rateunittype/rateunittype.module';
import { reducer } from './state/reducers';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavmenuComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        BrowserAnimationsModule,
        LoggingModule,
        LoginModule,   
        RateUnitTypeModule,  
        LocalStorageModule.withConfig({
            prefix: '',
            storageType: 'localStorage'
        }),
        StoreModule.provideStore(reducer),
        // Always put routing module LAST
        AppRoutingModule   
    ],
    providers: [        
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        },
        AuthService,
        AuthGuard,
        StorageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
