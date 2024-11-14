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
  errorMessage: string = '';
  
  constructor(
    private artistaMarcialService: ArtistaMarcialService, // Inyectamos el servicio
    private router: Router // Para redirigir, si es necesario
    ) {
    this.comprobarLogin()
  }

  comprobarLogin(){
    if(this.artistaMarcialService.getDni() !== null){
      this.router.navigate(['/home/inicio']);
    }
  }
  onLogin() {
    const dni = (document.getElementById('dni') as HTMLInputElement).value;
    const contrasena = (document.getElementById('password') as HTMLInputElement).value;
    if (!this.artistaMarcialService.isValidDni(dni)) {
      console.log(dni);
      alert('El formato del DNI no es válido. Asegúrate de que esté en el formato correcto.');
      return;
    }
    if (dni && contrasena) {
        // Comprobar si el formato del DNI es válido

        // Llamamos al método comprobarContrasena
        this.artistaMarcialService.comprobarContrasena(dni, contrasena).subscribe(
            (response) => {
                // Si la respuesta es positiva (por ejemplo, mensaje de éxito)
                if (response === true) {
                  this.artistaMarcialService.setDni(dni);  
                  this.router.navigate(['/home/inicio']); // Redirige al home o página correspondiente
                    
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
