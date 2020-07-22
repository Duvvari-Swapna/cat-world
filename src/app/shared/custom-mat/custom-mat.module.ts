import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

// all the imported mat modules from @angular/material package
import {
  MatToolbarModule,
  MatCardModule,
  MatSelectModule,
  MatFormFieldModule
 } from '@angular/material';

 import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule,
    ReactiveFormsModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule,
    ReactiveFormsModule
  ],
  declarations: [],
  providers: []
})

export class CustomMatModule { }
