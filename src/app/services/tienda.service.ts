import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MaterialInDB } from '../models/material-in-db.model';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  private apiUrl = 'http://localhost';
  constructor(private http: HttpClient) { }

  getMateriales(): Observable<any> {
    const url = `${this.apiUrl}/materiales/`;
    return this.http.get<any>(url);
  }

  getMaterialById(materialId: string): Observable<MaterialInDB> {
    return this.http.get<MaterialInDB>(`${this.apiUrl}/material/${materialId}`);
  }
}
