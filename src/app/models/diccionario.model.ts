import { Mensaje } from './mensaje.model';

export class DiccionarioInsertar {
  id: string;
  maestroId: number;
  aprendizId: number;
  mensajes: Mensaje[];

  constructor(id: string, maestroId: number, aprendizId: number, mensajes: Mensaje[]) {
    this.id = id;
    this.maestroId = maestroId;
    this.aprendizId = aprendizId;
    this.mensajes = mensajes;
  }
}
