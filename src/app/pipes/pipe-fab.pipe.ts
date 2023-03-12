import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeFab',
  pure: false,
})
export class PipeFabPipe implements PipeTransform {
  transform(articulos: Array<any>, arrayFab: Array<number>): Array<any> {
    if (arrayFab[0] == undefined) {
      return articulos;
    } else {
      return articulos.filter((a) => arrayFab.includes(a.fab));
    }
  }
}
