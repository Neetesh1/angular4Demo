import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDate'
})
export class MyDatePipe implements PipeTransform {

  transform(value: any, arg1:string): Date {
    console.log(arg1);
    if(value)
        return value;
    else
      return new Date();

  }

}
