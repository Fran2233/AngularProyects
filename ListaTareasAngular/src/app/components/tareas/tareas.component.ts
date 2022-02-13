import { Component, OnInit } from '@angular/core';
import {tarea} from 'src/app/models/tarea';
@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  listTareas: tarea[] = [];
  nombreTarea: '';

  constructor() { }

  ngOnInit(): void {
  }

  addTarea(){
    // Crear obj tarea
    const tarea: tarea = {
     nombre :  this.nombreTarea,
     estado: false
    }

    // agregar obj tarea en array
    this.listTareas.push(tarea);

    // resetinput
    this.nombreTarea = '';
  }

  eliminarTarea(index:number):void{
    // Le indico con el 1 que borre solo ese
    this.listTareas.splice(index,1);
  }

}
