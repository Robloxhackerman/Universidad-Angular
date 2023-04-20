import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '3-calculadora_modular';
  resultado: number
  resultadoProcesar(resultado: number){
    this.resultado = resultado
  }
}
