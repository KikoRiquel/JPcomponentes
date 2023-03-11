import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjetas-articulos',
  templateUrl: './tarjetas-articulos.component.html',
  styleUrls: ['./tarjetas-articulos.component.css'],
})
export class TarjetasArticulosComponent {
  @Input() articulos: any = [];
  constructor() {}
}
