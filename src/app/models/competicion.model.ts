export class Competicion {
  id: number;
  nombre: string;
  fecha: string; // Cadena de fecha en formato ISO
  lugar: string;

  constructor(id: number, nombre: string, fecha: string, lugar: string) {
    this.id = id;
    this.nombre = nombre;
    this.fecha = fecha;
    this.lugar = lugar;
  }

  // Método para obtener el año de la competición
  getAnio(): number {
    return new Date(this.fecha).getFullYear();
  }

  // Método para formatear la fecha en un estilo más amigable
  getFechaFormateada(): string {
    const opciones: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(this.fecha).toLocaleDateString('es-ES', opciones);
  }
}