import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import { SpinnerModule } from 'primeng/spinner';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputTextModule,
    SpinnerModule,
    ButtonModule,
    TableModule
  ],
  exports: [
    CommonModule,
    InputTextModule,
    SpinnerModule,
    ButtonModule,
    TableModule
  ]
})
export class PrimengModule { }
