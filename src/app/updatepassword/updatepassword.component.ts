import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ArtistaMarcialService } from '../services/artista-marcial.service';

@Component({
  selector: 'app-updatepassword',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './updatepassword.component.html',
  styleUrl: './updatepassword.component.css'
})


export class UpdatepasswordComponent {
  dni = sessionStorage.getItem('dni');
  constructor(private artistaMarcialService: ArtistaMarcialService, private router: Router) { }

  // Método para verificar si las contraseñas coinciden
  checkPasswords(): boolean {
    const password = (document.getElementById('password') as HTMLInputElement).value;
    const password2 = (document.getElementById('password2') as HTMLInputElement).value;

    if (password === password2) {
      return true;
    } else {
      return false;
    }
  }

  // Método para actualizar la contraseña en el servidor
  updatePassword(): void {
    const dni = sessionStorage.getItem('dni'); // Recuperar el DNI desde sessionStorage
    const password = (document.getElementById('password') as HTMLInputElement).value;
    
    if (!dni) {
      alert('DNI no encontrado en el almacenamiento de sesión.');
      return;
    }

    if (this.checkPasswords()) {
      // Si las contraseñas coinciden, actualizar la contraseña
      this.artistaMarcialService.updateContrasena(dni, password).subscribe(
        response => {
          alert('Contraseña actualizada exitosamente.');
          localStorage.setItem('dni', dni);  // Guardar el DNI en localStorage
          this.router.navigate(['/home']);  // Redirigir al login después de actualizar la contraseña
        },
        error => {
          alert('Hubo un error al actualizar la contraseña.');
        }
      );
    } else {
      alert('Las contraseñas no coinciden. Por favor, intenta nuevamente.');
    }
  }

}
