import { Component } from '@angular/core';
import { ConexionDBService } from 'src/app/services/conexion-db.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {
  constructor(private db: ConexionDBService) {}

  getArticulos() {
    return this.db.getArticulos();
  }
  getFabricantes() {
    return this.db.getFabricantes();
  }
}
