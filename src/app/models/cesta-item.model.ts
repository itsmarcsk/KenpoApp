import { MaterialItem } from "./material-item.model";

export class CestaItem {
    artistaMarcial_id: number;
    materiales: MaterialItem[];
  
    constructor(artistaMarcial_id: number, materiales: MaterialItem[]) {
      this.artistaMarcial_id = artistaMarcial_id;
      this.materiales = materiales;
    }
  }
  