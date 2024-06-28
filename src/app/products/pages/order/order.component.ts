import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero;

  public toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Wonderwoman',
      canFly: true,
      color: Color.red
    },
    {
      name: 'Flash',
      canFly: true,
      color: Color.yellow
    },
    {
      name: 'Green Lantern',
      canFly: true,
      color: Color.green
    }
  ];

  changeOrder( value: string ): void {
    this.orderBy = value as keyof Hero;
  }
}
