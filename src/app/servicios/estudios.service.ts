import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Educacion } from '../modelos/educacion';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {

  private localUrl = "http://localhost:8080"
  private apiUrl = "https://fdetcv.herokuapp.com/"

  constructor( private http:HttpClient  ) { }

  public listaEstudios(): Observable<Educacion[]> {
    // console.log("Servicio obtener estudios corriendo");
    return this.http.get<Educacion[]>(`${this.apiUrl}/ver/estudios`);
    
  }

  public agregarEstudios (addForm: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/new/estudios`, addForm);
    // console.log("Servicio agregar empleadores");
  }

  public editarEstudios (editForm: NgForm): Observable<Educacion> {
    return this.http.put<Educacion>(`${this.apiUrl}/edit/estudios`, editForm);
    
  }

  public borrarEstudios(estudioId: any): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/borraestudio/${estudioId}`);
    
  }

}

