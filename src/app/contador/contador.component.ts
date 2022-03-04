import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{title}}</h1>
        <h3>La base es: <strong>{{base}}</strong></h3>
        <button (click)="incrementar(-base);">-{{base}}</button>
        <span>{{amount}}</span>
        <button (click)="incrementar(base);">+{{base}}</button>
    `
})
export class contadorComponent {
    public title: string = 'Contador App';
    public base: number = 5;
    public amount: number = 0;

    incrementar(valor: number) {
        this.amount += valor;
    }
}