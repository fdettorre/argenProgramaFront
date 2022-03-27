import { Component, OnInit } from '@angular/core';
import { EmpleadorService } from '../../servicios/empleador.service';
import { Empleador } from 'src/app/modelos/empleador';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  trabajos: Empleador[] = [];
  editexperiencia: Empleador = {id:0, nombre:"", email:"", telefono:"", 
                  titulo:"", imagen:"", fechaInicio:new Date, fechaFin:new Date, cuit:"", tareas:""}

  constructor( private es:EmpleadorService) {

   }

  ngOnInit(): void {
  
    this.es.listaEmpleadores().subscribe(data =>{
      this.trabajos = data;
      console.log(this.trabajos);
    });
  }

  refresh() {
    this.es.listaEmpleadores().subscribe(data =>{
      this.trabajos = data;
      })
      this.editexperiencia = {id:0, nombre:"", email:"", telefono:"", 
      titulo:"", imagen:"", fechaInicio:new Date, fechaFin:new Date, cuit:"", tareas:""};
  }

  onGetExperiencia(trabajos: Empleador) {
    this.editexperiencia = trabajos;
  }

  onAddExperiencia(addForm: NgForm) {
    this.es.agregarEmpleadores(addForm.value).subscribe((response: Empleador) => {
      this.refresh();
      addForm.reset();
      },
      (error: HttpErrorResponse) =>{
        alert(error.message)
      }
      );
  }

  onEditExperiencia(editForm: NgForm) {
    this.es.editarEmpleadores(editForm.value).subscribe((data) =>
    this.refresh());
    editForm.reset();
    console.log("edit");
  }

  onDelExperiencia() {
    this.es.borrarEmpleadores(this.editexperiencia.id).subscribe((data)=> 
    this.refresh());
    console.log("deleteeee");
  }
}
