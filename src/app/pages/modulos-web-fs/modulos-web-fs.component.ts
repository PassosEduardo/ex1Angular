import { Component } from '@angular/core';
import Modulo from 'src/app/Models/Modulo';

@Component({
  selector: 'app-modulos-web-fs',
  templateUrl: './modulos-web-fs.component.html',
  styleUrls: ['./modulos-web-fs.component.css']
})
export class ModulosWebFsComponent {
  modulosList: Array<Modulo> = [
    {
      title : "Front Estático",
      professor: "Caue",
      dataInicio: new Date(),
      dataTermino : new Date(0o3-0o3-2022),
      status : true
    },
    {
      title : "Front Dinamico",
      professor: "Dannyel",
      dataInicio: new Date(),
      dataTermino : new Date(0o3-0o3-2022),
      status : true
    },
    {
      title : "Angular1",
      professor: "Luis Fernando",
      dataInicio: new Date(),
      dataTermino : new Date(0o3-0o3-2022),
      status : true
    },
    {
      title : "Angular2",
      professor: "MIsterio",
      dataInicio: new Date(),
      dataTermino : new Date(0o3-0o3-2022),
      status : true
    },
  ]
}
