import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { ArtistaMarcialService } from "../services/artista-marcial.service";  // Asegúrate de importar el servicio correcto

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  dni!: string;           // Para almacenar el DNI introducido
  contrasena!: string;    // Para almacenar la contraseña
  isDniValid: boolean = false;  // Para saber si el DNI es válido
  errorMessage: string = '';  // Para mostrar mensajes de error
  successMessage: string = ''; // Mensaje de éxito, si es necesario

  constructor(
    private artistaMarcialService: ArtistaMarcialService,
    private router: Router  // Inyectamos el Router para la redirección
  ) {}

  // Método para verificar que el DNI es válido
  checkDni() {
    if (!this.dni) {
      this.errorMessage = 'Por favor, introduce tu DNI.';
      return;
    }

    this.artistaMarcialService.checkArtistaMarcialExists(this.dni).subscribe((exists) => {
      if (exists) {
        this.isDniValid = true;  // Si el DNI es válido, permitir que se ingrese la contraseña
        this.errorMessage = '';
      } else {
        this.isDniValid = false;
        this.errorMessage = 'DNI no encontrado.';
      }
    });
  }

  // Método para iniciar sesión con el DNI y la contraseña
  login() {
    if (!this.isDniValid) {
      this.errorMessage = 'Primero valida tu DNI.';
      return;
    }

    if (!this.contrasena) {
      this.errorMessage = 'Por favor, ingresa la contraseña.';
      return;
    }

    this.artistaMarcialService.comprobarContrasena(this.dni, this.contrasena).subscribe((data) => {
      if (data.message === 'Contrasena correcta') {
        console.log('Login exitoso');
        this.successMessage = 'Login exitoso. Redirigiendo...';
        // Redirige al usuario a otra página, como un dashboard
        this.router.navigate(['/dashboard']);  // Cambia '/dashboard' por la ruta que quieras
      } else {
        this.errorMessage = 'Contraseña incorrecta';
      }
    }, error => {
      this.errorMessage = 'Error en la conexión o en los datos proporcionados.';
    });
  }

  // Método para redirigir a la página de registro
  goToRegister() {
    this.router.navigate(['/register']);  // Redirige al componente de registro
  }
}
