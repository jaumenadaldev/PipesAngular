import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';

@Pipe({
  name: 'color'
})

export class ColorPipe implements PipeTransform {
  transform(value: Color): string {
    switch (value) {
      case Color.red:
        return 'Rojo';
      case Color.black:
        return 'Negro';
      case Color.blue:
        return 'Azul';
      case Color.green:
        return 'Verde';
      case Color.yellow:
        return 'Amarillo';
      default:
        return 'Unknown';
    }
  }
}
