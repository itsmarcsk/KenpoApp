import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CestaItem } from '../models/cesta-item.model';

@Injectable({
  providedIn: 'root'
})
export class CestaService {
  private apiUrl = 'http://localhost';
  constructor(private http: HttpClient) { }

   // Método para añadir un item a la cesta
   addToCesta(item: CestaItem): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/`, item);
  }

  // Método para añadir material a la cesta
  addMaterialToCesta(artista_marcial_id: number, material_item: string): Observable<boolean> {
    return this.http.put<boolean>(`${this.apiUrl}/${artista_marcial_id}/add-material`, material_item);
  }
}
