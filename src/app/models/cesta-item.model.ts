export class CestaItem {
    artistaMarcial_id: number;
    material_id: string[];
  
    constructor(artistaMarcial_id: number, material_id: string[]) {
      this.artistaMarcial_id = artistaMarcial_id;
      this.material_id = material_id;
    }
  }
  