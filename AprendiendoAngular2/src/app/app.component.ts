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


constructor(){
  setInterval(()=>this.deshabilitado = false,3000)
}

getSuma(num1: number,num2: number){
  return num1 +num2;
}
}
