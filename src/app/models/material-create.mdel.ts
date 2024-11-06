import { MaterialBase } from './material-base.model';

export class MaterialCreate extends MaterialBase {
  constructor(nombre: string, descripcion: string, precio: number) {
    super(nombre, descripcion, precio);
  }
}
