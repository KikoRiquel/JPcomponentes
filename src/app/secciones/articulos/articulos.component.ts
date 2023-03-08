import { Component } from '@angular/core';
import { ConexionDBService } from 'src/app/services/conexion-db.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css'],
})
export class ArticulosComponent {
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

  /*   getDbObjects(): Array<any> {
    return this.db.getDbObjects();
  } */
}
