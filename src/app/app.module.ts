import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { AutenticacionService } from './servicios/autenticacion.service';
import { InterceptorService } from './servicios/interceptor.service';
import { EmpleadorService } from './servicios/empleador.service';
import { EstudiosService } from './servicios/estudios.service';
import { HabilidadesService } from './servicios/habilidades.service';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ExperienciaComponent,
    AcercadeComponent,
    EstudiosComponent,
    HabilidadesComponent,
    NavbarComponent,
    IniciarSesionComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmpleadorService, {
    provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
