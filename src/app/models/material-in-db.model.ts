import { MaterialBase } from './material-base.model';

export class MaterialInDB extends MaterialBase {
  id: string;
  idImagen: string;

  constructor(id: string, nombre: string, descripcion: string, precio: number, idImagen: string) {
    super(nombre, descripcion, precio);
    this.id = id;
    this.idImagen = idImagen;
  }
}
