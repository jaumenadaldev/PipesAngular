import { Pipe, PipeTransform } from "@angular/core";

// canFly = true | canFly = 'Puede volar'
// canFly = false | canFly = 'No puede volar'


@Pipe({
  name: 'canFly'
})

export class CanFyPipe implements PipeTransform {
  transform( value: boolean): 'Puede volar' | 'No puede volar' {

    return ( value) ? 'Puede volar' : 'No puede volar';
  }
}
