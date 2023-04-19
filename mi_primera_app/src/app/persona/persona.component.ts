import {Component} from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  private _nombre: string = 'Pepe';
  private _apellido: string = 'Mondau';
  private _edad: number = 69;


  get getNombre(): string {
    return this._nombre;
  }

  get getApellido(): string {
    return this._apellido;
  }

  get getEdad(): number {
    return this._edad;
  }
}
