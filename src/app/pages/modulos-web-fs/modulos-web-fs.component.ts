import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import Modulo from 'src/app/Models/Modulo';

@Component({
  selector: 'app-modulos-web-fs',
  templateUrl: './modulos-web-fs.component.html',
  styleUrls: ['./modulos-web-fs.component.css']
})
export class ModulosWebFsComponent implements OnInit,OnChanges {
  modulosList: Array<Modulo> = [
    {
      title : "Front Estático",
      telProf: 27999996122,
      professor: "Caue",
      dataInicio: new Date(),
      dataTermino : new Date("03-03-2022"),
      status : false
    },
    {
      title : "Front Dinamico",
      professor: "Dannyel",
      telProf: 27999996122,
      dataInicio: new Date(),
      dataTermino : new Date("03-03-2052"),
      status : true
    },
    {
      title : "Angular1",
      professor: "Luis Fernando",
      telProf: 27999996122,
      dataInicio: new Date(),
      dataTermino : new Date("03-03-2052"),
      status : false
    },
    {
      title : "Angular2",
      professor: "MIsterio",
      telProf: 27999996122,
      dataInicio: new Date(),
      dataTermino : new Date("03-03-2052"),
      status : true
    },
  ]

  ngOnInit(): void {
    console.log("Task list was born!")

  }
  ngOnChanges(): void {
    console.log("Task List has changed!")
  }
}
