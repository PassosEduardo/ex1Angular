import { ModulosWebFsComponent } from './../modulos-web-fs.component';
import { Component, Input, OnChanges } from '@angular/core';
import Modulo from 'src/app/Models/Modulo';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnChanges {

  @Input() modulo?:Modulo; 
  // ={

  //   title:"N especificado",
  //   professor: "N definido",
  //   dataInicio: new Date(),
  //   dataTermino: new Date(),
  //   status: false
  // }
  constructor(){

  }

  changeStatus(){
    if(this.modulo) this.modulo.status = !this.modulo?.status;
  }
  getColor() {
    return this.modulo?.status? "#32a852" : ""
  }
  ngOnChanges() {
    console.log("Task List has changed!")
  }
}
