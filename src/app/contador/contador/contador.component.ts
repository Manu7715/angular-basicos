import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template:`
  <h1>{{title}}</h1>
  
  <h3>La base é: <strong>{{base}}</strong></h3>

  <button (click)="accumular(+base)">+{{base}}</button>
  
  <span>  {{numero}} </span>

  <button (click)="accumular(-base)">-{{base}}</button>
  `
})
export class ContadorComponent {
  title:string = 'Contador App';
  numero:number=10;
  base:number=5;
  accumular(valor:number){
    this.numero+=valor;
  }
}
