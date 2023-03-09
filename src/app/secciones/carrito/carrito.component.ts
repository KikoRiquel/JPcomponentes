import { Component } from '@angular/core';
import { ConexionDBService } from 'src/app/services/conexion-db.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent {
  constructor(private db: ConexionDBService) {}
}
