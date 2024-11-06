import { TecnicaCreate } from './tecnica-create.model';

export class TecnicaInDB extends TecnicaCreate {
  constructor(nombre: string, idImagen: string) {
    super(nombre, idImagen);
  }
}
