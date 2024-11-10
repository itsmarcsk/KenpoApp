export class CestaItem {
    artistaMarcialId: number;
    materialId: string[];
  
    constructor(artistaMarcialId: number, materialId: string[]) {
      this.artistaMarcialId = artistaMarcialId;
      this.materialId = materialId;
    }
  }
  