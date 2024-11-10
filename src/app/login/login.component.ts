import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ArtistaMarcialService } from '../services/artista-marcial.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  dni: string = '';
  contrasena: string = '';
  errorMessage: string = '';

  constructor(
    private artistaMarcialService: ArtistaMarcialService, // Inyectamos el servicio
    private router: Router // Para redirigir, si es necesario
  ) {}

  onLogin() {
    if (this.dni && this.contrasena) {
      // Llamamos al método comprobarContrasena
      this.artistaMarcialService.comprobarContrasena(this.dni, this.contrasena).subscribe(
        (response) => {
          // Si la respuesta es positiva (por ejemplo, mensaje de éxito)
          if (response.message === 'success') {
            this.router.navigate(['/home']); // Redirige al home o página correspondiente
          } else {
            this.errorMessage = 'Datos incorrectos. Intenta de nuevo.'; // Muestra un mensaje de error
          }
        },
        (error) => {
          this.errorMessage = 'Error en la conexión o en los datos proporcionados.';
        }
      );
    } else {
      this.errorMessage = 'Por favor, ingresa el DNI y la contraseña.';
    }
  }
}
