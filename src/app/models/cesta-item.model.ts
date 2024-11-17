export class CestaItem {
  artista_marcial_id: string;
  materiales: { material_id: string; cantidad: number }[];

  constructor(artista_marcial_id: string, materiales: { material_id: string; cantidad: number }[] = []) {
    this.artista_marcial_id = artista_marcial_id;
    this.materiales = materiales;
  }
}
