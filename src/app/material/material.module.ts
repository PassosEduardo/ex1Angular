import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
  ],
  exports:[
    MatToolbarModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class MaterialModule { }
