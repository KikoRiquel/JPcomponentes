import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
  arrayFab: number[] = [];
  arrayCat: number[] = [];

  constructor(private db: ConexionDBService) {}

  filtroArray(array: Array<any>, id: number) {
    if (!array.includes(id)) {
      array.push(id);
      console.log('Añadido', array);
    } else {
      const index = array.indexOf(id);
      if (index !== -1) {
        array.splice(index, 1);
      }
      console.log('Borrado', array);
    }
    return array;
  }

  /*   filtroArrayFab(arrayFab: any[]): any {
    const result: Array<any> = [];
    for (const item of arrayFab) {
      if (!result.includes(item)) {
        result.push(item);
      }
    }
    return result;
  } */
  resetFilters() {
    this.filtroCat = 0;
    this.filtroFab = 0;
    this.filtroNom = '';
    this.arrayFab = [];
    this.arrayCat = [];
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
