import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  BMI: number;
  resultado: string;
  interpretacion: string;

  constructor(private route: ActivatedRoute) { 
    this.resultado='';
    this.interpretacion='';
    this.BMI = +route.snapshot.paramMap.get('valor')!;
  }

  ngOnInit(): void {
    this.getResultado();
  }

  getResultado(){
    if(this.BMI >= 25){
      this.resultado = 'Exceso de peso';
      this.interpretacion = 'Tienes un peso corporal superior al normal , procura cambiar tu estilo de vida';
    }else if(this.BMI >= 18.5){
      this.resultado = 'Normal';
      this.interpretacion = 'Tienes un peso normal. ¡Buen Trabajo!';
    } else{
      this.resultado = 'Bajo Peso';
      this.interpretacion = 'Tienes un peso inferior a lo normal, ve a un nutricionista';
    }
  }

}
