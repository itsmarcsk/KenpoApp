import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KatasTecnicasService {
  private apiUrl = 'http://localhost';
  constructor(private http: HttpClient) {}

  getKatas(): Observable<{katas: any[]}> {
    const url = `${this.apiUrl}/katas/`;
    return this.http.get<{katas: any[]}>(url);
  }
  
  getTecnicas(): Observable<{ tecnicas: any[] }> {
    const url = `${this.apiUrl}/tecnicas/`;
    return this.http.get<{ tecnicas: any[] }>(url);
  }
  
  
}
