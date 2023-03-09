import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeNom'
})
export class PipeNomPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
