import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {
  //ATTRIBUTES
  private dbzService : DbzService;
  //CONSTRUCTOR //Inyección de dependencia
  constructor( service : DbzService ) { 
    this.dbzService = service;
  } 
  //GETTERS
  get getPersonajesFromService() {
    return this.dbzService.getPersonajes;
  }

}