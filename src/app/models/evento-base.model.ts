export class EventoBase {
    titulo: string;
    descripcion: string;
    fecha: string;
    lugar: string;
  
    constructor(titulo: string, descripcion: string, fecha: string, lugar: string) {
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.fecha = fecha;
      this.lugar = lugar;
    }
  }
  