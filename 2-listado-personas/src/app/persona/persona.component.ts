import {Component, Input} from '@angular/core';
import {Persona} from "../modelo/persona.model";

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  /*
  "strictPropertyInitialization": false,

  Para que no sea necesario inicializar cuando especificas tipo
   */
  @Input() persona: Persona;
}
