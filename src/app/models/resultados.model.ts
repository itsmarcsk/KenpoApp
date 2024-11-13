export class Resultados {
  id: number;
  artista_id: number;
  competicion_id: number;
  puesto: number;

  constructor(id: number, artista_id: number, competicion_id: number, puesto: number) {
    this.id = id;
    this.artista_id = artista_id;
    this.competicion_id = competicion_id;
    this.puesto = puesto;
  }

  // Método para determinar si el artista quedó en primer lugar
  esGanador(): boolean {
    return this.puesto === 1;
  }

  // Método para obtener el puesto como texto (e.g., "1º", "2º", "3º")
  getPuestoTexto(): string {
    const sufijos = ["º", "º", "º"];
    const puestoTexto = this.puesto <= 3 ? `${this.puesto}${sufijos[this.puesto - 1]}` : `${this.puesto}º`;
    return puestoTexto;
  }
}