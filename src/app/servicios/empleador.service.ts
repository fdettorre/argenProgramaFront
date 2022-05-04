import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleador } from '../modelos/empleador';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmpleadorService {

  private apiUrl = "http://localhost:8080"

  constructor( private http:HttpClient  ) { }

  public listaEmpleadores(): Observable<Empleador[]> {
    return this.http.get<Empleador[]>(`${this.apiUrl}/ver/empleador`);
    // console.log("Servicio obtener empleadores corriendo");
    
  }

  public agregarEmpleadores (addForm: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/new/empleador`, addForm);
    // console.log("Servicio agregar empleadores");
  }

  public editarEmpleadores (editForm: NgForm): Observable<Empleador> {
    return this.http.put<Empleador>(`${this.apiUrl}/edit/empleador`, editForm);
    // console.log("Servicio de edición empleadores");
  }

  borrarEmpleadores(empleadorId: any): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/borraempleador/${empleadorId}`);
    // console.log("Servicio de borrar empleadores");
  }

}
