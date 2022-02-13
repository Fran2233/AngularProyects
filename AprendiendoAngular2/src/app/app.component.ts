import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Fran'
  texto = 'Escriba algo';
  deshabilitado = true;
  imgSrc = 'https://w7.pngwing.com/pngs/549/955/png-transparent-angularjs-javascript-jquery-directive-python-software-foundation-angle-triangle-logo.png';
  texto2 = 'Event Binding';
  texto3 = '';

  constructor() {
    setInterval(() => this.deshabilitado = false, 3000)
  }

  getSuma(num1: number, num2: number) {
    return num1 + num2;
  }

  cambiarTexto(): void {
    this.texto2 = 'Event Binding 2 a partir de un metodo en el button';
  }

  listEstudiantes: any[] = [
    {
      nombre: 'Fran',
      estado: 'Aprobado'
    },
    {
      nombre: 'Pedro',
      estado: 'Promoción'
    },
    {
      nombre: 'Juan',
      estado: 'Reprobado'
    }
  ]
  mostrar = true;
  toogle():void{
    this.mostrar = !this.mostrar;
  }
}
