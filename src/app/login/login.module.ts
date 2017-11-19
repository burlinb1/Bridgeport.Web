import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginCallbackComponent } from './login-callback.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [LoginCallbackComponent]
})
export class LoginModule { }
