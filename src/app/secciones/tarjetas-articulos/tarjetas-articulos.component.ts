import { Component, Input } from '@angular/core';
import { ConexionDBService } from 'src/app/services/conexion-db.service';

@Component({
  selector: 'app-tarjetas-articulos',
  templateUrl: './tarjetas-articulos.component.html',
  styleUrls: ['./tarjetas-articulos.component.css'],
})
export class TarjetasArticulosComponent {
  @Input() articulos: any = [];
  constructor(private db: ConexionDBService) {}
}
