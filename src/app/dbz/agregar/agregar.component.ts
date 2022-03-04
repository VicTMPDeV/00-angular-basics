import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input()
  nuevoPersonaje: Personaje = {
    nombre: '',
    ki: 0
  }

  private dbzService: DbzService;

  constructor(service:DbzService){
    this.dbzService = service;
  }

  agregar(){
    //Compruebo que no llega vacío
    if(this.nuevoPersonaje.nombre.trim().length === 0){
      alert('Por favor, introduce datos');
      return;
    }

    this.dbzService.addPersonaje(this.nuevoPersonaje);

    //Limpio los campos
    this.nuevoPersonaje = {
      nombre: '',
      ki: 0
    }
  }
}