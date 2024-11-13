import { EventoBase } from './evento-base.model';

export class EventoInDB extends EventoBase {
  id: string;
  id_imagen: string;

  constructor(id: string, titulo: string, descripcion: string, fecha: string, lugar: string, id_imagen: string) {
    super(titulo, descripcion, fecha, lugar);
    this.id = id;
    this.id_imagen = id_imagen;
  }
}
