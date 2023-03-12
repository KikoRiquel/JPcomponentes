import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeCat',
  pure: false,
})
export class PipeCatPipe implements PipeTransform {
  transform(articulos: Array<any>, filtroCat: Array<number>): Array<any> {
    if (filtroCat[0] == undefined) {
      return articulos;
    } else {
      return articulos.filter((a) => filtroCat.includes(a.cat));
    }
  }
}
