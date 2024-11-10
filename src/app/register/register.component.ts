import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ArtistaMarcialService } from '../services/artista-marcial.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(
    private router: Router,
    private artistaMarcialService: ArtistaMarcialService  // Inyectamos el servicio
  ) {}

  guardarDni() {
    const dni = (document.getElementById('dni') as HTMLInputElement).value;
    // Verificar que el DNI no esté vacío
    if (dni) {
      if (!this.artistaMarcialService.isValidDni(dni)) {
        alert('El formato del DNI no es válido. Asegúrate de que esté en el formato correcto.');
        return;  // Si el DNI no es válido, salimos del método
      }
      // Llamamos al método para verificar si el DNI ya existe
      this.artistaMarcialService.checkArtistaMarcialExists(dni).subscribe(exists => {
        if (exists) {
          // Si el DNI existe, guardamos en sessionStorage y redirigimos
          sessionStorage.setItem('dni', dni);
          alert('DNI encontrado. Redirigiendo a la actualización de contraseña...');
          this.router.navigate(['/updatepassword']);  // Redirige al componente para actualizar la contraseña
        } else {
          // Si el DNI no existe, mostramos un mensaje de error
          alert('El DNI no está registrado. Por favor, verifica el DNI.');
        }
      });
    } else {
      alert('Por favor, ingresa un DNI válido.');
    }
  }
}