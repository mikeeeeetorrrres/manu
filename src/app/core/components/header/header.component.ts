import { Component, effect, inject, signal } from '@angular/core';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // Usa el método `inject` para obtener la instancia del servicio
  headerService = inject(HeaderService);

  // Señales para gestionar las clases y el título mostrado
  claseAplicada = signal("");
  tituloMostrado = signal(this.headerService.titulo());  // Inicializa con el valor del servicio

  // Método o lógica que utilice el servicio
  ngOnInit(): void {
    this.headerService.titulo.set("HOME");  // Inicializa el título en el servicio
  }

  // Efecto que se ejecuta cuando el valor de headerService.titulo cambia
  actualizarTitulo = effect(() => {
    // Cada vez que el título cambia en el servicio, actualizamos el título mostrado
    this.tituloMostrado.set(this.headerService.titulo());
  }, { allowSignalWrites: true });

  // Efecto que cambia la clase cuando el título cambia
  esconderTitulo = effect(() => {
    if (this.headerService.titulo()) {
      this.claseAplicada.set("fade-out");
    }
  }, { allowSignalWrites: true });

  // Método para cambiar el título después de la animación
  mostrarTituloNuevo(e: AnimationEvent): void {
    console.log(e.animationName.includes("fade-out"));
    if (e.animationName.includes("fade-out")) {
      // Cambia el título al valor del servicio
      this.tituloMostrado.set(this.headerService.titulo());
      // Aplica la clase fade-in para la animación
      this.claseAplicada.set("fade-in");
      setTimeout(() => {
        this.claseAplicada.set("");  // Resetea la clase después de un tiempo
      }, 1000);
    }
  }
}
