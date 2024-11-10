import { KataCreate } from './kata-create.model';

export class KataInDB extends KataCreate {
  id: string;
  idVideo: string;

  constructor(id: string, nombre: string, idVideo: string) {
    super(nombre);
    this.id = id;
    this.idVideo = idVideo;
  }
}
