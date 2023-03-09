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
  filtroNombre: string = '';

  constructor(private db: ConexionDBService) {}

  getCategorias(): Array<any> {
    return this.db.getCategorias();
  }
  getFabricantes(): Array<any> {
    return this.db.getFabricantes();
  }
  getArticulos(): Array<any> {
    return this.db.getArticulos();
  }
  /*
  (click)="filtroCat = a.id"(click)="filtroFab = a.id"
  let arts = this.db.getArticulos();
      if (this.filtroCat == 0 && this.filtroFab == 0) return arts;
      else {
        if (this.filtroCat == 0)
          return arts.filter((a) => a.fab == this.filtroFab);
        else if (this.filtroFab == 0)
          return arts.filter((a) => a.cat == this.filtroCat);
        else
          return arts
            .filter((a) => a.cat == this.filtroCat)
            .filter((a) => a.fab == this.filtroFab);
      } */

  /*   getDbObjects(): Array<any> {
    return this.db.getDbObjects();
  } */
}
