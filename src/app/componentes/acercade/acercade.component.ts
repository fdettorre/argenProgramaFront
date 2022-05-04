import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {

  isLogged= false;

  constructor(private as:AutenticacionService) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('currentUser')){
      this.isLogged = true
    }
    else {
      this.isLogged = false
    }
    
  }

}
