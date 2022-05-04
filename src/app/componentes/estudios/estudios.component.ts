import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Educacion } from 'src/app/modelos/educacion';
import { EstudiosService } from 'src/app/servicios/estudios.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  estudios: Educacion[] = [];
  editEstudios: Educacion = {id:0, nombre:"", titulo:"", imagen:"", 
                            fechaInicio: new Date, fechaFin:new Date, promedio:""};

  isLogged = false;

  constructor( private edu:EstudiosService) { }

  ngOnInit(): void {
    this.edu.listaEstudios().subscribe(data =>{
      this.estudios = data;
      // console.log(this.estudios);
    });

    if (sessionStorage.getItem('currentUser')){
      this.isLogged = true
    }
    else {
      this.isLogged = false
    }

  }

  refresh() {
    this.edu.listaEstudios().subscribe(data =>{
      this.estudios = data;
      })
      this.editEstudios = {id:0, nombre:"", titulo:"", imagen:"", 
      fechaInicio: new Date, fechaFin:new Date, promedio:""};
  }

  onGetEstudios(estudio: Educacion) {
    this.editEstudios = estudio;
  }


  onAddEstudios(addForm: NgForm) {
    this.edu.agregarEstudios(addForm.value).subscribe((response: Educacion) => {
      this.refresh();
      addForm.reset();
      },
      (error: HttpErrorResponse) =>{
        alert(error.message)
      }
      );
  }

  onEditEstudios(editForm: NgForm) {
    this.edu.editarEstudios(editForm.value).subscribe((data) =>
    this.refresh());
    editForm.reset();
    // console.log("edit");
  }

  onDelEstudios() {
    this.edu.borrarEstudios(this.editEstudios.id).subscribe((data)=> 
    this.refresh());
    // console.log("deleteeee");
  }

}
