import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { ArtistaMarcial } from '../models/artista-marcial.model';

@Injectable({
  providedIn: 'root'
})
export class ArtistaMarcialService {
  private apiUrl = 'http://localhost'; // Cambia esta URL según la configuración de tu backend

  constructor(private http: HttpClient) {}

  // Llamada para obtener un artista marcial por DNI
  readArtistaMarcial(dni: string): Observable<ArtistaMarcial> {
    const url = `${this.apiUrl}/artistas-marciales/${dni}`;
    return this.http.get<ArtistaMarcial>(url);
  }

  // Llamada para comprobar la contraseña de un artista marcial
  comprobarContrasena(dni: string, contrasena: string): Observable<{ message: string }> {
    const url = `${this.apiUrl}/artistas-marciales/${dni}/${contrasena}`;
    return this.http.get<{ message: string }>(url);
  }

  updateContrasena(dni: string, newPassword: string): Observable<any> {
    const url = `${this.apiUrl}/${dni}/contrasena`;
    return this.http.put(url, { new_password: newPassword });
  }

  checkArtistaMarcialExists(dni: string): Observable<boolean> {
    const url = `${this.apiUrl}/artistas-marciales/${dni}`;
    return this.http.get<ArtistaMarcial>(url).pipe(
      map((artista: ArtistaMarcial) => {
        // Si el objeto 'artista' existe, retorna true
        return true;
      }),
      catchError(() => {
        // Si ocurre un error (por ejemplo, 404 Not Found), retorna false
        return of(false);
      })
    );
  }
}
