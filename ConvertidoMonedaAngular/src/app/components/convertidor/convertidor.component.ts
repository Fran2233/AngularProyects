import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {

  cantidad = 0;
  tengo = 'USD';
  quiero = 'Euro';
  total = 0;

  monedas: string[] = ['USD', 'Euro', 'Libra']

  constructor() { }

  ngOnInit(): void {
  }

  convertir(): void {

    switch (this.tengo) {
      case 'USD':
        if (this.quiero === 'USD') {
          this.total = this.cantidad;
        }

        if (this.quiero === 'Euro') {
          this.total = this.cantidad * 0.88;
        }

        if (this.quiero === 'Libra') {
          this.total = this.cantidad * 0.74;
        }
        break;
      case 'Euro':
        if (this.quiero === 'USD') {
          this.total = this.cantidad * 1.13;
        }

        if (this.quiero === 'Euro') {
          this.total = this.cantidad;
        }

        if (this.quiero === 'Libra') {
          this.total = this.cantidad * 0.84;
        }
        break;
      case 'Libra':
        if (this.quiero === 'USD') {
          this.total = this.cantidad * 1.36;
        }

        if (this.quiero === 'Euro') {
          this.total = this.cantidad * 1.19;
        }

        if (this.quiero === 'Libra') {
          this.total = this.cantidad;
        }
        break;
    }

  }

}
