import { Component , OnInit, inject } from '@angular/core';
import * as headerService from '../../core/services/header.service';

@Component({
  selector: 'app-carrito',
  standalone: false, // Esto está correcto
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'] // Corregido: styleUrls en plural
})
export class CarritoComponent implements OnInit{
  // Usa el método `inject` para obtener la instancia del servicio
  headerService = inject(headerService.HeaderService);

  ngOnInit(): void {
      this.headerService.titulo.set("Carrito");
  }



}
