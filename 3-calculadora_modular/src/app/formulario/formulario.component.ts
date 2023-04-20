import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() resultado = new EventEmitter<number>
  operadorA: number
  operadorB: number
  sumar() {
    let resultado: number = this.operadorA + this.operadorB
    this.resultado.emit( resultado)

  }
}
