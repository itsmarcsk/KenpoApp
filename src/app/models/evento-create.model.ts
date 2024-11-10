import { EventoBase } from './evento-base.model';

export class EventoCreate extends EventoBase {
  idImagen: string;

  constructor(titulo: string, descripcion: string, fecha: string, lugar: string, idImagen: string) {
    super(titulo, descripcion, fecha, lugar);
    this.idImagen = idImagen;
  }
}
