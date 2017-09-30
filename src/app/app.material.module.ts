import { NgModule } from '@angular/core';
import {
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,   
    MdInputModule,
    MdFormFieldModule
  } from '@angular/material';

  @NgModule({
    exports: [
      MdAutocompleteModule,
      MdButtonModule,
      MdButtonToggleModule,
      MdCardModule,
      MdInputModule,
      MdFormFieldModule
    ]
  })
  export class AppMaterialModule {}