import { Component, OnInit, inject } from '@angular/core';
import * as headerService from '../../core/services/header.service';

@Component({
  selector: 'app-perfil',
  standalone: false,

  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit{
  // Usa el método `inject` para obtener la instancia del servicio
  headerService = inject(headerService.HeaderService);

  ngOnInit(): void {
      this.headerService.titulo.set("Perfil");
  }


}
