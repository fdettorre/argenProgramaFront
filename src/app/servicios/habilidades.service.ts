import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Habilidad } from '../modelos/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  private apiUrl = "http://localhost:8080"

  constructor( private http:HttpClient  ) { }

  public listaHabilidades(): Observable<Habilidad[]> {
    return this.http.get<Habilidad[]>(`${this.apiUrl}/ver/habilidad`);
    
  }

  public agregarHabilidad(addForm: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/new/habilidad`, addForm);
  }

  public editarHabilidad (editForm: any): Observable<Habilidad> {
    return this.http.put<Habilidad>(`${this.apiUrl}/edit/habilidad`, editForm);
    // console.log(`${this.apiUrl}/edit/habilidad`, editForm);
  }

  borrarHabilidad(habilidadId: any): Observable <void>{
    return this.http.delete<void>(`${this.apiUrl}/borrahabilidad/${habilidadId}`);
    }

}
