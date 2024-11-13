import { Mensaje } from './mensaje.model';

export class DiccionarioInsertar {
  _id: string;
  maestro_id: number;
  aprendiz_id: number;
  mensajes: Mensaje[];

  constructor(_id: string, maestro_id: number, aprendiz_id: number, mensajes: Mensaje[]) {
    this._id = _id;
    this.maestro_id = maestro_id;
    this.aprendiz_id = aprendiz_id;
    this.mensajes = mensajes;
  }
}
