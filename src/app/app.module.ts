import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './share/navbar/navbar.component';
import { InicioComponent } from './secciones/inicio/inicio.component';
import { ArticulosComponent } from './secciones/articulos/articulos.component';
import { CarritoComponent } from './secciones/carrito/carrito.component';
import { Page404Component } from './error/page404/page404.component';
import { TarjetasArticulosComponent } from './secciones/tarjetas-articulos/tarjetas-articulos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    ArticulosComponent,
    CarritoComponent,
    Page404Component,
    TarjetasArticulosComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
