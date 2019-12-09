import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import { SpinnerModule } from 'primeng/spinner';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputTextModule,
    SpinnerModule,
    ButtonModule
  ],
  exports: [
    CommonModule,
    InputTextModule,
    SpinnerModule,
    ButtonModule
  ]
})
export class PrimengModule { }
