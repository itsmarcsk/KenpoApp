import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EscuelaService {
  private apiUrl = 'http://localhost';

  constructor(private http: HttpClient) {}

  // Método para obtener los detalles de una escuela por ID
  getEscuelaById(escuelaId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/escuelas/${escuelaId}`);
  }
}
