import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginCallbackComponent } from './login-callback.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [LoginComponent, LoginCallbackComponent]
})
export class LoginModule { }
