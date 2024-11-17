export class CestaItem {
  artista_marcial_id: string;
  materiales: { material_id: string, cantidad: number }[];

  constructor(artista_marcial_id: string, materiales: { material_id: string, cantidad: number }[] = []) {
    this.artista_marcial_id = artista_marcial_id;
    this.materiales = materiales;
  }

  // Método para añadir un material a la cesta
  addMaterial(material_id: string) {
    const existingMaterial = this.materiales.find(item => item.material_id === material_id);
    if (existingMaterial) {
      existingMaterial.cantidad += 1;  // Si el material ya existe, aumentamos la cantidad
    } else {
      this.materiales.push({ material_id, cantidad: 1 });  // Si no, lo agregamos con cantidad 1
    }
  }
}
