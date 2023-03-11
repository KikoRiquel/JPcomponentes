import { Component } from '@angular/core';
import { ConexionDBService } from 'src/app/services/conexion-db.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css'],
})
export class ArticulosComponent {
  filtroCat: number = 0;
  filtroFab: number = 0;
  filtroNom: string = '';
  arrayFab: Array<number> = [];

  constructor(private db: ConexionDBService) {}

  getArray() {
    console.log(this.arrayFab, this.arrayFab.length);
  }
  getBoolean() {
    console.log(this.filtroFab);
  }
  getString() {
    console.log(this.filtroNom);
  }
  resetFilters() {
    this.filtroCat = 0;
    this.filtroFab = 0;
    this.filtroNom = '';
  }

  getCategorias(): Array<any> {
    return this.db.getCategorias();
  }
  getFabricantes(): Array<any> {
    return this.db.getFabricantes();
  }
  getArticulos(): Array<any> {
    return this.db.getArticulos();
  }
}
