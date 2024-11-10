import { EventoBase } from './evento-base.model';

export class EventoInDB extends EventoBase {
  id: string;
  idImagen: string;

  constructor(id: string, titulo: string, descripcion: string, fecha: string, lugar: string, idImagen: string) {
    super(titulo, descripcion, fecha, lugar);
    this.id = id;
    this.idImagen = idImagen;
  }
}
