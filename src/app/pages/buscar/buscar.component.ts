import { Component , OnInit, inject } from '@angular/core';
import * as headerService from '../../core/services/header.service';

@Component({
  selector: 'app-buscar',
  standalone: false,

  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent implements OnInit{
  // Usa el método `inject` para obtener la instancia del servicio
  headerService = inject(headerService.HeaderService);

  ngOnInit(): void {
      this.headerService.titulo.set("Buscar");
  }


}
