import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { AppMaterialModule } from '../material/app.material.module';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
