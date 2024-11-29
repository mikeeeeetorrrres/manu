import { Component , OnInit, inject } from '@angular/core';
import * as headerService from '../../core/services/header.service';

@Component({
  selector: 'app-articulo',
  standalone: false,

  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.css'
})
export class ArticuloComponent implements OnInit{
  // Usa el método `inject` para obtener la instancia del servicio
  headerService = inject(headerService.HeaderService);

  ngOnInit(): void {
      this.headerService.titulo.set("Articulos");
  }

}
