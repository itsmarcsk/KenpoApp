import { Component } from '@angular/core';
import { EventosService } from '../services/eventos.service';
import { MultimediaService } from '../services/multimedia.service';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {
  eventos: any[] = [];
  imagenes: Map<string, string> = new Map();  // Mapa para almacenar las imágenes de los eventos por ID

  constructor(
    private eventosService: EventosService,
    private multimediaService: MultimediaService
  ) { }

  ngOnInit(): void {
    this.getEventos();
    this.getEventos2();
  }

  private getEventos() {
    this.eventosService.getEventos().subscribe((data) => {
      // Verificar si 'data.eventos' es un array
      if (Array.isArray(data.eventos)) {
        this.eventos = data.eventos; // Asignamos el array de eventos
        this.eventos.forEach((evento) => {
          // Llamar al servicio para obtener la imagen
          //this.getImagen(evento.id_imagen);
          console.log(evento);
          // Crear el div
          const div = document.createElement('div');
          div.classList.add('container', 'mt-4');
          const div1 = document.createElement('div');
          div1.classList.add('row', 'align-items-center', 'mb-4', 'shadow', 'p-3', 'bg-white', 'rounded', 'position-relative',);
          div.appendChild(div1);
          const divImage = document.createElement('div');
          divImage.classList.add('w-auto', 'h-auto');
          const img = document.createElement('img');
          img.style.width = '200px';
          img.style.height = '200px';
          img.alt = "Imagen del evento: " + evento.titulo;
          this.multimediaService.getImagen(evento.id_imagen).subscribe((blob: Blob) => {
            // Convertir el Blob a una URL de imagen
            const imageUrl = URL.createObjectURL(blob);
            img.src = imageUrl;

          });
          divImage.appendChild(img);
          const divTextos = document.createElement('div');
          divTextos.classList.add('col-md-8', 'd-flex', 'flex-column');
          div1.append(divImage, divTextos)
          const titulo = document.createElement('h4');
          titulo.textContent = evento.titulo;
          titulo.classList.add('font-weight-bold', 'mb-4');

          const fecha = document.createElement('span');
          fecha.textContent = evento.fecha;
          fecha.classList.add('mb-1');

          const lugar = document.createElement('span');
          lugar.textContent = evento.lugar;
          lugar.classList.add('mb-3', 'mt-auto');

          const descripcion = document.createElement('p');
          descripcion.textContent = evento.descripcion;
          descripcion.classList.add('mb-2', 'text-muted');

          divTextos.append(titulo, fecha, lugar, descripcion);
          // Asegúrate de que el div se agregue al DOM
          document.body.appendChild(div); // O agrega el div a un contenedor específico
        });
      } else {
        console.error('La propiedad "eventos" no es un array:', data.eventos);
      }
    }, (error) => {
      console.error('Error al obtener eventos:', error);
    });
  }

  // Obtener eventos desde el servicio de eventos
  getEventos2(): void {
    this.eventosService.getEventos().subscribe((data: any[]) => {
      this.eventos = data;
      console.log(this.eventos);
    });
  }


}
