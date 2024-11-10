export class Escuela {
  id: number;
  nombre: string;
  direccion: string;
  ciudad: string;
  pais: string;

  constructor(id: number, nombre: string, direccion: string, ciudad: string, pais: string) {
    this.id = id;
    this.nombre = nombre;
    this.direccion = direccion;
    this.ciudad = ciudad;
    this.pais = pais;
  }

  // Método para obtener la dirección completa en un solo string
  getDireccionCompleta(): string {
    return `${this.direccion}, ${this.ciudad}, ${this.pais}`;
  }

  // Método para formatear el nombre de la escuela en mayúsculas
  getNombreMayusculas(): string {
    return this.nombre.toUpperCase();
  }
}