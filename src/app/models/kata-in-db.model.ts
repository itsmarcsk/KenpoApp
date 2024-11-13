import { KataCreate } from './kata-create.model';

export class KataInDB extends KataCreate {
  id: string;
  id_video: string;

  constructor(id: string, nombre: string, id_video: string) {
    super(nombre);
    this.id = id;
    this.id_video = id_video;
  }
}
