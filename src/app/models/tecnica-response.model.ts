export class TecnicaResponse {
    id: string;
    nombre: string;
    id_imagen: string;
  
    constructor(id: string, nombre: string, id_imagen: string) {
      this.id = id;
      this.nombre = nombre;
      this.id_imagen = id_imagen;
    }
  }
  