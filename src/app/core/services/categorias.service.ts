import { Injectable } from '@angular/core';
import { Categorias } from '../interfaces/categorias';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor() { }

  async getAll(): Promise<Categorias[]> {  // Marcamos el método como async
    const res = await fetch("./../../../assets/icons/data/database.json");
    const resJson = await res.json();
    return resJson;
  }
}
