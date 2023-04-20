import { Component } from '@angular/core';
import {Persona} from "./modelo/persona.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: string = 'Listado de personas';
  personas: Persona[] = [
    new Persona("Pepe", "Mondau"),
    new Persona("Pepe", "Mondau")
  ]

  personaAgregada(persona: Persona) {
    this.personas.push(persona)
  }
}
