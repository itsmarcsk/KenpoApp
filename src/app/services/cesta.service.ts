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

   // Método para crear un item cesta
  /*addToCesta(item: CestaItem): Observable<any> {
    return this.http.post<any>(`http://localhost/cesta/`, item);
  }*/

  // Método para añadir material a la cesta
  addMaterialToCesta(artista_marcial_id: string, material_item: string): Observable<boolean> {
    const body = { material_item };  // Enviar un objeto con el material_item
  
    return this.http.put<boolean>(`http://localhost/cesta/${artista_marcial_id}/add-material`, body);
  }
  
  

  // Método para obtener la cesta de un artista marcial por su ID
  getCestaByArtistaMarcialId(artistaMarcialId: string): Observable<CestaItem | null> {
    return this.http.get<CestaItem | null>(`${this.apiUrl}/cesta/${artistaMarcialId}`);
  }

}
