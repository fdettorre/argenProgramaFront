import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';
import { Habilidad } from '../../modelos/habilidad';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habilidad: Habilidad[] = [];
  edithabil: Habilidad = {id:0, nombre:"", valor:0};
  
  isLogged = false;

  constructor( private hab:HabilidadesService ) { }

  ngOnInit(): void {
    this.hab.listaHabilidades().subscribe(data =>{
      // console.log(data);
      this.habilidad = data;
    });

    if (sessionStorage.getItem('currentUser')){
      this.isLogged = true
    }
    else {
      this.isLogged = false
    }

  }

  refresh() { 
    this.hab.listaHabilidades().subscribe(data =>{
    this.habilidad = data;
    })
    this.edithabil = {id:0, nombre:"", valor:0};
}

  public onAddHabilidad(addForm: NgForm): void{
    this.hab.agregarHabilidad(addForm.value).subscribe((response: Habilidad) => {
    this.refresh();
    addForm.reset();
    },
    (error: HttpErrorResponse) =>{
      alert(error.message)
    }
    );
    
  }

  onEditHabilidad(editForm: NgForm) {
    this.hab.editarHabilidad(editForm.value).subscribe((data) =>
    this.refresh());
    editForm.reset();
    // console.log("edit");
  }

  onGetHabilidad (habilidad: Habilidad) {
    this.edithabil = habilidad;
  }

  onDelHabilidad() {
    this.hab.borrarHabilidad(this.edithabil.id).subscribe((data)=> 
    this.refresh());
  }

}