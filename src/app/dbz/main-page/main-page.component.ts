import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  //ATTRIBUTES
  nuevoPersonaje : Personaje = {
    nombre: '',
    ki: 0
  }
  private dbzService: DbzService;
  //CONSTRUCTOR //Inyección de dependencia
  constructor( service: DbzService ) {
    this.dbzService = service;
  } 

}