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
  comprobarContrasena(dni: string, contrasena: string): Observable<boolean> {
    const url = `${this.apiUrl}/artistas-marciales/${dni}/${contrasena}`;
  
    return this.http.get<boolean>(url).pipe(
      map(response => {
        // Retorna directamente la respuesta booleana
        return response;
      }),
      catchError((error) => {
        // Si ocurre un error en la llamada al backend
        console.error('Error al comprobar la contraseña', error);
        return of(false); // En caso de error, devolvemos false
      })
    );
  }
  

  updateContrasena(dni: string, newPassword: string): Observable<boolean> {
    const url = `${this.apiUrl}/artistas-marciales/update-password`;
    const params = new HttpParams()
      .set('dni', dni)
      .set('new_password', newPassword);

    return this.http.put<boolean>(url, {}, { params })
      .pipe(
        map(response => response === true),
        catchError(() => of(false)) // Si hay un error, devuelve `false`
      );
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

  getResultadosByArtista(artistaId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/resultados/artista/${artistaId}`);
  }

  getCompeticionById(competicionId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/competiciones/${competicionId}`);
  }

  // Método para guardar el DNI en localStorage
  setDni(dni: string): void {
    localStorage.setItem('dni', dni);
  }

  // Método para obtener el DNI desde localStorage
  getDni(): string | null {
    return localStorage.getItem('dni');
  }

  // Método para limpiar el DNI de localStorage (por ejemplo, al hacer logout)
  clearDni(): void {
    localStorage.removeItem('dni');
  }

  isValidDni(dni: string): boolean {
    // Primero, validar el formato general: 8 dígitos y una letra
    const dniRegex = /^\d{8}[A-Za-z]$/;
    if (!dniRegex.test(dni)) {
      return false;
    }

    // Lista de letras válidas en orden
    const validLetters = "TRWAGMYFPDXBNJZSQVHLCKE";

    // Extraer los dígitos y la letra del DNI
    const dniNumber = parseInt(dni.slice(0, 8), 10);
    const dniLetter = dni.slice(8).toUpperCase();

    // Calcular la letra correcta para los 8 dígitos
    const correctLetter = validLetters[dniNumber % 23];

    // Verificar si la letra del DNI es correcta
    return dniLetter === correctLetter;
  }
}