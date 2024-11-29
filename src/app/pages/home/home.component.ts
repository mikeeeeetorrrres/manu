import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { HeaderService } from '../../core/services/header.service';
import { CategoriasService } from '../../core/services/categorias.service';
import { Categorias } from '../../core/interfaces/categorias';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy{

    // Usa el método `inject` para obtener la instancia del servicio
    headerService = inject(HeaderService);
    categoriasService = inject(CategoriasService);
    categorias:Categorias[]=[];

    ngOnInit(): void {
        this.headerService.titulo.set("HOME");
        this.headerService.extendido.set(true);
        this.categoriasService.getAll().then(res => this.categorias = res)
    }
    ngOnDestroy(): void {
      this.headerService.extendido.set(false);
    }

}
