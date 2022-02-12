import { Component } from "@angular/core";

@Component({
    selector: `miComponente`,
    templateUrl: "./miComponente.component.html"
})

export class miComponente{

    public titulo: string;
    public comentario: string;
    public year: number;
    

    constructor(){
        this.titulo = "HOLAA";
        this.comentario = "Test comentario";
        this.year = 2022;
        console.log("Componente cargado!",this.comentario,this.titulo,this.year)
        

    }
}