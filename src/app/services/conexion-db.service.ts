import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConexionDBService {
  private categorias: Array<any> = [];
  private fabricantes: Array<any> = [];
  private articulos: Array<any> = [];
  private carrito: Array<any> = [];
  private baseURL: string =
    'https://my-json-server.typicode.com/luismiguel-fernandez/angular2022/';

  constructor(private http: HttpClient) {
    http.get(this.baseURL + 'categorias').subscribe((datos: any) => {
      this.categorias = datos;
      console.log(this.categorias);
    });
    http.get(this.baseURL + 'fabricantes').subscribe((datos: any) => {
      this.fabricantes = datos;
      console.log(this.fabricantes);
    });
    http.get(this.baseURL + 'articulos').subscribe((datos: any) => {
      this.articulos = datos;
      console.log(this.articulos);
    });
  }

  getCategorias(): Array<any> {
    return this.categorias;
  }
  getFabricantes(): Array<any> {
    return this.fabricantes;
  }
  getArticulos(): Array<any> {
    return this.articulos;
  }
}

/*
  private DbObjects: Array<any> = [];
http.get(this.baseURL + 'db').subscribe((datos: any) => {
  this.DbObjects = datos;
  console.log(this.DbObjects);
});
getDbObjects(): Array<any> {
return this.DbObjects;
}
*/
