import { TecnicaCreate } from './tecnica-create.model';

export class TecnicaInDB extends TecnicaCreate {
  constructor(nombre: string, id_imagen: string) {
    super(nombre, id_imagen);
  }
}
