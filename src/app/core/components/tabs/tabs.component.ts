import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  standalone: false,

  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {

  constructor(private router: Router){
    this.router.events.subscribe(event =>{
      if(event instanceof NavigationEnd){
        console.log("EVENTO",event)
        switch (event.urlAfterRedirects){
          case "/":
            this.seleccionado = [false,true,false,false]
            break;
          case "/carrito":
            this.seleccionado = [true,false,false,false]
            break;
          case "/buscar":
            this.seleccionado = [false,false,true,false]
            break;
          case "/perfil":
            this.seleccionado = [false,false,false,true]
            break;
          default:
            this.seleccionado = [false,false,false,false]
            break;
        }

      }

    })
  }

  seleccionado = [false,false,false,false];
  colorDesactivado = "#555555"
  colorActivado = "#000000"

  navegar(direcion:string){
    //Cambiar de pagina
    this.router.navigate([direcion])
    console.log(direcion)

  }
}
