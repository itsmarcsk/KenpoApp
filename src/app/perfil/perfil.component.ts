import { Component, OnInit } from '@angular/core';
import { ArtistaMarcial } from '../models/artista-marcial.model';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ArtistaMarcialService } from '../services/artista-marcial.service';
import { EscuelaService } from '../services/escuela.service';
import { Escuela } from '../models/escuela.model';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  artistaMarcial: ArtistaMarcial  = new ArtistaMarcial(0,"","","", new Date(), "", "", "","","","","");
  escuela: Escuela = new Escuela(0,"","","","");
  constructor(
    private artistaMarcialService: ArtistaMarcialService,private escuelaService: EscuelaService,private router: Router
  ) {
    
  }

  ngOnInit(): void {
    // Obtén el DNI desde el servicio
    const dni = this.artistaMarcialService.getDni();

    if (dni) {
      this.obtenerDatosArtistaMarcial(dni);
      
    } else {
      console.error('No se encontró el DNI en el almacenamiento local');
    }
  }
  

  obtenerDatosArtistaMarcial(dni: string): void {
    this.artistaMarcialService.readArtistaMarcial(dni).subscribe(
      (artista: ArtistaMarcial) => {
        this.artistaMarcial = artista;
        this.obtenerEscuela(artista.escuela_id);
      },
      (error) => {
        console.error('Error al obtener los datos del artista marcial:', error);
      }
    );
  }
  obtenerEscuela(escuelaId: string): void {
    this.escuelaService.getEscuelaById(Number(escuelaId)).subscribe(
      (escuela : Escuela) => {
        console.log('Escuela obtenida:', escuela);
        this.escuela = escuela;
      },
      (error) => {
        console.error('Error al obtener la escuela:', error);
      }
    );
  }

  cerrarSesion(): void {
    const confirmacion = window.confirm('¿Estás seguro de que quieres cerrar sesión?');
    if (confirmacion) {
      this.artistaMarcialService.clearDni();  // Limpiar el DNI en el almacenamiento local
      this.router.navigate(['/index/login']);  // Redirigir al login
    }
  }
  
}


/*{
  "dni": "51512676J",
  "nombre": "Mark",
  "apellidos": "Gimenez Diaz",
  "fecha_nacimiento": "2003-10-24",
  "pais": "España",
  "provincia": "Madrid",
  "comunidad_autonoma": "Comunidad de Madrid",
  "escuela_id": 1,
  "cinturon": "Azul",
  "grado": "Aprendiz",
  "contrasena": null,
  "id": 8
}*/