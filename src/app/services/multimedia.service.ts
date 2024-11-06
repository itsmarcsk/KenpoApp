import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  private apiUrl = 'http://localhost'; // Asegúrate de que esta URL sea la correcta para tu API

  constructor(private http: HttpClient) { }

  // Obtener una imagen por su ID
  getImagen(imagenId: string): Observable<Blob> {
    const url = `${this.apiUrl}/imagenes/${imagenId}`;
    const headers = new HttpHeaders().set('Accept', 'image/*'); // Aseguramos que acepte imágenes
    return this.http.get(url, { headers, responseType: 'blob' });
  }

  // Obtener un video por su ID
  getVideo(videoId: string): Observable<Blob> {
    const url = `${this.apiUrl}/videos/${videoId}`;
    const headers = new HttpHeaders().set('Accept', 'video/*'); // Aseguramos que acepte videos
    return this.http.get(url, { headers, responseType: 'blob' });
  }
}
