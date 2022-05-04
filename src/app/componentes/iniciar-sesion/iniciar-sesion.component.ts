import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  form: FormGroup;
  nuevoUsuario:any = {nombre:"", nombreUsuario:"",email:"", password:""};

  constructor( private formB: FormBuilder, 
    private autServ: AutenticacionService,
    private ruta: Router) {
    this.form=this.formB.group({
      nombreUsuario:['', [Validators.required]],
      password:['', [Validators.required, Validators.minLength(8)]],
      deviceinfo:this.formB.group({
        deviceId:[],
        deviceType:[],
        notificationToken:[],
      })
    })

   }

  ngOnInit(): void {
  }

  get NombreUsuario() {
    return this.form.get('user');
  }

  get Password () {
    return this.form.get('password');
  }

 onEnviar(event: Event) {
   event.preventDefault;
   this.autServ.iniciarSesion(this.form.value).subscribe(data=>{
    //  console.log("datos" + JSON.stringify(data));
     this.ruta.navigate(['/portfolio']);
   })
 }

 refresh(){
  this.nuevoUsuario = {nombre:"", nombreUsuario:"",email:"", password:""};
 };

 onRegister(addForm: NgForm) {
  this.autServ.registrarUsuario(addForm.value).subscribe((response: any) => {
    // this.refresh();
    addForm.reset();
    },
    (error: HttpErrorResponse) =>{
      alert(error.message)
    }
    );
 }

}
