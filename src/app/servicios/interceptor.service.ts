import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private as:AutenticacionService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    
    var currentUser = this.as.UsuarioAutenticado;
    if(currentUser && currentUser.token) {
      req =  req.clone({
        setHeaders:{
          Authorization: `Bearer ${currentUser.token}`
        }
      })
    }
    
    // console.log("interceptor corriendo" + JSON.stringify(currentUser));
    return next.handle(req)
  }


}
