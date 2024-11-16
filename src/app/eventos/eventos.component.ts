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
  ) {}

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
          this.getImagen(evento.id_imagen);
          console.log(evento);
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

  // Obtener imagen usando el servicio de multimedia
  getImagen(imagenId: string): void {
    this.multimediaService.getImagen(imagenId).subscribe((blob: Blob) => {
      const imageUrl = URL.createObjectURL(blob);
      this.imagenes.set(imagenId, imageUrl);
      console.log(imageUrl);
    });
  }
}
