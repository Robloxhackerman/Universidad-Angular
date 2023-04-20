export class Persona {
  nombre: string = "";
  apellido: string = "";

  /*
  Simplificado:

  constructor(public nombre: string, apellido: string){}
   */
  constructor(nombre: string, apellido: string) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}
