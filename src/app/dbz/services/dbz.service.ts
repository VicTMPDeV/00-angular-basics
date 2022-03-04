import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
    //ATTRIBUTES
    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            ki : 1000000
        },
        {
            nombre: 'Vegeta',
            ki : 950000
        },
    ];
    //CONSTRUCTOR //Inyección de dependencia
    constructor() { }
    //GETTERS
    get getPersonajes(): Personaje[] {
        return this._personajes; //rompemos la referencia con _personajes
    }
    //FUNCIONALIDADES
    addPersonaje(personaje: Personaje) {
        this._personajes.push(personaje);
    }

}