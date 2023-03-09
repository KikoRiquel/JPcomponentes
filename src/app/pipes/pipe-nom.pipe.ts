import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeNom',
})
export class PipeNomPipe implements PipeTransform {
  transform(articulos: any[], busqueda: string): any[] {
    if (articulos.length && busqueda) {
      return articulos.filter((a) =>
        a.nombre.toLowerCase().includes(busqueda.toLowerCase())
      );
    } else {
      return articulos;
    }
  }
}
