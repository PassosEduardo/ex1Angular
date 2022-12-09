import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemComponent } from './modulos-web-fs/item/item.component';
import { ModulosWebFsComponent } from './modulos-web-fs/modulos-web-fs.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ModuloCreateComponent } from './modulo-create/modulo-create.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ModulosWebFsComponent,
    ItemComponent,
    NotFoundComponent,
    ModuloCreateComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  exports:[
    ItemComponent,
    ModulosWebFsComponent
  ]
})
export class PagesModule { }
