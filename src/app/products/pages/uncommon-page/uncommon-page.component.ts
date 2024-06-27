import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  public name: string= 'Jaume';
  public gender: 'male' | 'female' = 'male';
  public conocerMap = {
    'male': 'conocerlo',
    'female': 'conocerla'
  }

  changeClient():void {
    this.name = 'Maria';
    this.gender = 'female';
  }

  // i18n Plural
  public clients: string[] = ['Jaume', 'Maria', 'Xavi', 'Laura', 'Aina', 'Neus', 'Juan'];
  public clientsMap = {
    '=0': 'no hay ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos a # clientes esperando.'
  }

  deleteClient(): void {
    this.clients.shift();
  }

  // Key-Value Pipe
  public person = {
    name: 'Jaume',
    age: 29,
    address: 'C/ Falsa, 123',
  }

  // Async Pipe
  public myObservableTimer = interval(2000).pipe(
    tap( value => console.log('Tap: ', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
      console.log('Tenemos data en la promesa.');
      this.person.name = 'Otro nombre';
    }, 3500);
  });
}
