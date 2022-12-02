import { Component, Input } from '@angular/core';
import Modulo from 'src/app/Models/Modulo';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input() modulo?:Modulo ={

    title:"N especificado",
    professor: "N definido",
    dataInicio: new Date(),
    dataTermino: new Date(),
    status: false
  }
}
