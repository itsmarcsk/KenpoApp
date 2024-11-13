import { EventoBase } from './evento-base.model';

export class EventoCreate extends EventoBase {
  id_imagen: string;

  constructor(titulo: string, descripcion: string, fecha: string, lugar: string, id_imagen: string) {
    super(titulo, descripcion, fecha, lugar);
    this.id_imagen = id_imagen;
  }
}
