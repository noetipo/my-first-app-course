import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value:boolean = true):  string{
    console.log('Pipe value: ', value);
    return value?'Activo':'Inactivo';
  }

}
