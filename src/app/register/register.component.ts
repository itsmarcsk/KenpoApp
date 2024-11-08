import { Component } from "@angular/core";
import { ArtistaMarcialService } from "../services/artista-marcial.service";  // Asegúrate de importar el servicio correcto

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent {
  dni!: string;
  nombre!: string;
  apellidos!: string;
  fechaNacimiento!: string;
  pais!: string;
  provincia!: string;
  comunidadAutonoma!: string;
  escuelaId!: number;
  cinturon!: string;
  grado!: string;
  password!: string;
  confirmPassword!: string;
  isDniValid: boolean = false;
  errorMessage: string = '';

  constructor(private artistaMarcialService: ArtistaMarcialService) {}

  // Verificar DNI antes de mostrar los campos de registro
  checkDni() {
    if (this.artistaMarcialService.isValidDni(this.dni)) {
      // El DNI es válido, ahora se puede mostrar el resto del formulario
      this.isDniValid = true;
      this.errorMessage = ''; // Limpiar el mensaje de error
    } else {
      // El DNI no es válido
      this.isDniValid = false;
      this.errorMessage = 'El DNI no es válido. Asegúrate de que tenga 8 números y una letra.';
    }
  }

  // Método para registrar al usuario (En este caso, lo puedes modificar según tus necesidades)
  register() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Las contraseñas no coinciden.';
      return;
    }

    // Verificar que todos los campos estén completos
    if (!this.nombre || !this.apellidos || !this.fechaNacimiento || !this.pais || !this.provincia || !this.comunidadAutonoma || !this.escuelaId || !this.cinturon || !this.grado) {
      this.errorMessage = 'Por favor, completa todos los campos del formulario.';
      return;
    }

    // Aquí, creamos el objeto con todos los datos
    const artistaMarcial = {
      dni: this.dni,
      nombre: this.nombre,
      apellidos: this.apellidos,
      fecha_nacimiento: this.fechaNacimiento,
      pais: this.pais,
      provincia: this.provincia,
      comunidad_autonoma: this.comunidadAutonoma,
      escuela_id: this.escuelaId,
      cinturon: this.cinturon,
      grado: this.grado,
      contrasena: this.password
    };

    console.log(artistaMarcial);  // Imprime el objeto para verificar que los datos son correctos

  }
}
