import { Component, OnInit, inject } from '@angular/core';
import * as headerService from '../../core/services/header.service';


@Component({
  selector: 'app-rubro',
  standalone: false,

  templateUrl: './rubro.component.html',
  styleUrl: './rubro.component.css'
})
export class RubroComponent implements OnInit{
  // Usa el método `inject` para obtener la instancia del servicio
  headerService = inject(headerService.HeaderService);

  ngOnInit(): void {
      this.headerService.titulo.set("Rubro");
  }



}
