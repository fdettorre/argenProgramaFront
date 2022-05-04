import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  
  localUrl ="http://localhost:8080/auth";
  private apiUrl = "https://fdetcv.herokuapp.com/auth"
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http:HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'))
   }
    
  iniciarSesion(credenciales:any): Observable<any>{
    return this.http.post((`${this.apiUrl}/login`), credenciales).pipe(map(
      data =>{
        sessionStorage.setItem('currentUser', JSON.stringify(data));
        this.currentUserSubject.next(data);
        return data;
        // console.log(data);
      }
    ))
  }

  registrarUsuario(usuario:any): Observable<any>{
    return this.http.post((`${this.apiUrl}/nuevo`), usuario);
  }
  

  get UsuarioAutenticado( ) {
    return this.currentUserSubject.value;
  }



}
