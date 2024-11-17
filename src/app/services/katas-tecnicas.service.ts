import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KatasTecnicasService {
  private apiUrl = 'http://localhost';
  constructor(private http: HttpClient) {}

  getKatas(): Observable<any[]> {
    const url = `${this.apiUrl}/katas/`;
    return this.http.get<any[]>(url);
  }
  
  getTecnicas(): Observable<any[]> {
    const url = `${this.apiUrl}/tecnicas/`;
    return this.http.get<any[]>(url);
  }
  
}
