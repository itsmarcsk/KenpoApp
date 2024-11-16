import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  private apiUrl = 'http://localhost';
  constructor(private http: HttpClient) { }

  getEventos(): Observable<any> {
    const url = `${this.apiUrl}/eventos/`;
    return this.http.get<any>(url);
  }
}
