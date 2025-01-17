import { Pipe, PipeTransform } from '@angular/core';

// jaume | toggleCase = 'JAUME'
// JAUME | toggleCase = 'jaume'

@Pipe({
  name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {
  transform( value: string, toUpper: boolean = false): string {

    return ( toUpper) ? value.toUpperCase() : value.toLowerCase();
  }
}
