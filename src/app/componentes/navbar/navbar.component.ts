import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogged= false;

  constructor(private as:AutenticacionService, private route: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('currentUser')){
      this.isLogged = true
    }
    else {
      this.isLogged = false
    }
    // console.log(this.isLogged, sessionStorage.getItem('currentUser'));
  }

  logOut(){
    sessionStorage.clear;
    this.route.navigate(['/iniciar-sesion']);
  }

  logIn(){
    this.route.navigate(['/iniciar-sesion']);
  }

}


