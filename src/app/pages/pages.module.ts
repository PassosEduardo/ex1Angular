import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemComponent } from './modulos-web-fs/item/item.component';
import { ModulosWebFsComponent } from './modulos-web-fs/modulos-web-fs.component';


@NgModule({
  declarations: [
    ModulosWebFsComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    ItemComponent,
    ModulosWebFsComponent
  ]
})
export class PagesModule { }
