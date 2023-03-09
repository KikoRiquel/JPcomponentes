import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeFab',
})
export class PipeFabPipe implements PipeTransform {
  getArray(arrayFab: Array<any>) {
    console.log(arrayFab, arrayFab.length);
  }
  transform(articulos: Array<any>, filtroFab: number): Array<any> {
    const arrayFab: Array<number> = [];
    arrayFab.push(filtroFab);

    this.getArray(arrayFab);

    if (!arrayFab.length || arrayFab[0] === 0) {
      return articulos;
    } else {
      return articulos.filter((articulo) => arrayFab.includes(articulo.fab));
    }
  }
}
/*     transform(articulos: Array<any>, arrayFab: Array<any>): Array<any> {
    console.log(arrayFab);
    if (!arrayFab || arrayFab.length === 0) {
      return articulos;
    } else return articulos.filter((a) => a.fab == arrayFab);
  } */
/*   transform(articulos: Array<any>, filtroFab: number): Array<any> {
    if (filtroFab == 0) return articulos;
    else return articulos.filter((a) => a.fab == filtroFab);
  } */
/*   transform(articulos: Array<any>, filtroFab: number): Array<any> {
    const arrayFab: Array<number> = [];
    arrayFab.push(filtroFab);
    this.getArray(arrayFab);

    if (!arrayFab.length || arrayFab[0] === 0) {
      return articulos;
    }
    return articulos.filter((articulo) => arrayFab.includes(articulo.fab));
  } */
