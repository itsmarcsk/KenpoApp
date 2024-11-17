import { Component, OnInit } from '@angular/core';
import { ArtistaMarcial } from '../models/artista-marcial.model';
import { Router} from '@angular/router';
import { ArtistaMarcialService } from '../services/artista-marcial.service';
import { EscuelaService } from '../services/escuela.service';
import { Escuela } from '../models/escuela.model';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  artistaMarcial: ArtistaMarcial  = new ArtistaMarcial(0,"","","", new Date(), "", "", "","","","","");
  escuela: Escuela = new Escuela(0,"","","","");
  competicion: any;
  historialCompeticiones: any[] = [];  // Array para almacenar los resultados
  constructor(
    private artistaMarcialService: ArtistaMarcialService,private escuelaService: EscuelaService,private router: Router
  ) {
    
  }

  ngOnInit(): void {
    // Obtén el DNI desde el servicio
    const dni = this.artistaMarcialService.getDni();

    if (dni) {
      this.obtenerDatosArtistaMarcial(dni);
      this.getHistorial(dni);
    } else {
      console.error('No se encontró el DNI en el almacenamiento local');
    }
  }
  

  obtenerDatosArtistaMarcial(dni: string): void {
    this.artistaMarcialService.readArtistaMarcial(dni).subscribe(
      (artista: ArtistaMarcial) => {
        this.artistaMarcial = artista;
        console.log('Artista marcial obtenido:', artista);
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
  
  getHistorial(dni: string) {
    const contenedor = document.getElementById('historial');  // Asegúrate de tener un contenedor con este ID en el HTML
    this.artistaMarcialService.getResultadosByArtista(dni).subscribe(
      (resultados) => {
        this.historialCompeticiones = resultados;
        console.log(resultados);
        this.historialCompeticiones.forEach((historial) =>{
          this.artistaMarcialService.getCompeticionById(historial.competicion_id).subscribe(
            (competicion) => {
              this.competicion = competicion;
              console.log(competicion)
              const divCompeticion = document.createElement('div');
              divCompeticion.classList.add('card', 'mb-3', 'mt-4');  // Clases de Bootstrap para la tarjeta

              // Añadir una clase de Bootstrap para el borde y el padding
              divCompeticion.style.maxWidth = "540px";
              divCompeticion.classList.add('shadow', 'rounded');

              // Crear el cuerpo de la tarjeta
              const divBody = document.createElement('div');
              divBody.classList.add('card-body');

              // Crear el contenido de cada contenedor
              const puesto = document.createElement('p');
              puesto.classList.add('card-text', 'fw-bold');  // Estilo de texto en negrita
              puesto.textContent = `Puesto: ${historial.puesto}`;

              const lugar = document.createElement('p');
              lugar.classList.add('card-text');
              lugar.textContent = `Lugar: ${competicion.lugar}`;

              const fecha = document.createElement('p');
              fecha.classList.add('card-text');
              fecha.textContent = `Fecha: ${competicion.fecha}`;

              const nombre = document.createElement('h5');
              nombre.classList.add('card-title');
              nombre.textContent = `Nombre: ${competicion.nombre}`;
              
              // Añadir todos los párrafos al contenedor de la competición
              divCompeticion.appendChild(puesto);
              divCompeticion.appendChild(lugar);
              divCompeticion.appendChild(fecha);
              divCompeticion.appendChild(nombre);
              const contenedor = document.getElementById('historial');
              // Añadir el contenedor al contenedor principal
              if (contenedor){
                contenedor.appendChild(divCompeticion);
              }

            },
            (error) => {
              console.error('Error al obtener los detalles de la competición:', error);
            }
          );
        })
      },
      (error) => {
        console.error('Error al obtener los resultados:', error);
      }
    );
    
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