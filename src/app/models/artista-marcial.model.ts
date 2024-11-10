export class ArtistaMarcial {
  id: number;
  dni: string;
  nombre: string;
  apellidos: string;
  fechaNacimiento: string; // Usaremos una cadena ISO para la fecha
  pais: string;
  provincia: string;
  comunidadAutonoma: string;
  escuelaId: number;
  cinturon: string;
  grado: string;
  contrasena?: string; // Campo opcional

  constructor(
    id: number,
    dni: string,
    nombre: string,
    apellidos: string,
    fechaNacimiento: string,
    pais: string,
    provincia: string,
    comunidadAutonoma: string,
    escuelaId: number,
    cinturon: string,
    grado: string,
    contrasena?: string
  ) {
    this.id = id;
    this.dni = dni;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.fechaNacimiento = fechaNacimiento;
    this.pais = pais;
    this.provincia = provincia;
    this.comunidadAutonoma = comunidadAutonoma;
    this.escuelaId = escuelaId;
    this.cinturon = cinturon;
    this.grado = grado;
    this.contrasena = contrasena;
  }

  
  // Método de ejemplo para obtener el nombre completo
  getNombreCompleto(): string {
    return `${this.nombre} ${this.apellidos}`;
  }

  // Método de ejemplo para calcular la edad en base a la fecha de nacimiento
  getEdad(): number {
    const birthDate = new Date(this.fechaNacimiento);
    const today = new Date();
    let edad = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      edad--;
    }
    return edad;
  }
}
