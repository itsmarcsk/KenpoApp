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


  // Método para añadir material a la cesta
  addMaterialToCesta(artista_marcial_id: string, material_item: string): Observable<boolean> {
    const body = { material_item };  // Enviar un objeto con el material_item
  
    return this.http.put<boolean>(`http://localhost/cesta/${artista_marcial_id}/add-material`, body);
  }

  // Método para obtener la cesta de un artista marcial por su ID
  getCestaByArtistaMarcialId(artistaMarcialId: string): Observable<CestaItem | null> {
    return this.http.get<CestaItem | null>(`${this.apiUrl}/cesta/${artistaMarcialId}`);
  }

 // Eliminar todos los materiales de un artista marcial
  deleteMaterialByArtistaMarcial(artistaMarcialId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/cesta/${artistaMarcialId}`);
  }

  // Eliminar la lista completa de materiales de un artista marcial
  deleteMaterialListByArtistaMarcial(artistaMarcialId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/cesta/material/${artistaMarcialId}`);
  }

  // Eliminar un material específico de la lista de un artista marcial
  deleteMaterialFromList(artistaMarcialId: string, materialId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/cesta/material/${artistaMarcialId}/${materialId}`);
  }

  // Reducir la cantidad de un material en la lista o eliminarlo si la cantidad es 1
  deleteMaterialQuantity(artistaMarcialId: string, materialId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/cesta/material/cantidad/${artistaMarcialId}/${materialId}`);
  }

}
