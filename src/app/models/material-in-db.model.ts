import { MaterialBase } from './material-base.model';

export class MaterialInDB extends MaterialBase {
  id: string;
  id_imagen: string;

  constructor(id: string, nombre: string, descripcion: string, precio: number, id_imagen: string) {
    super(nombre, descripcion, precio);
    this.id = id;
    this.id_imagen = id_imagen;
  }
}
