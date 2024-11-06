export interface ArtistaMarcial {
    id: number;
    dni: string;
    nombre: string;
    apellidos: string;
    fechaNacimiento: string; // Usaremos ISO date string para fechas
    pais: string;
    provincia: string;
    comunidadAutonoma: string;
    escuelaId: number;
    cinturon: string;
    grado: string;
    contrasena?: string; // Campo opcional
  }
  