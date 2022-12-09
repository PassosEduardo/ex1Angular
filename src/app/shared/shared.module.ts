import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../material/material.module';
import { HeaderComponent } from './header/header.component';
import { StatusPipe } from './pipes/status.pipe';
import {PhonePipe} from './pipes/phone.pipe';
import { ModuloDirective } from './directives/task.directive';



@NgModule({
  declarations: [
    HeaderComponent,
    StatusPipe,
    PhonePipe,
    ModuloDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports : [
    HeaderComponent,
    StatusPipe,
    PhonePipe,
    ModuloDirective

  ]
})
export class SharedModule { }
