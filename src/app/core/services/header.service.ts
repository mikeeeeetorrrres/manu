import { Injectable, WritableResource, WritableSignal, inject, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }

  titulo = signal("Titulo");
  extendido: WritableSignal<boolean> = signal(false);
}


