import { Directive, Input } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl, Validators } from '@angular/forms';
import { minimum } from './validation-util';

@Directive({
  selector: '[ngModel][minimum]',
  providers:[
    {provide:NG_VALIDATORS, useExisting: MinValidator, multi: true } //NG_VALIDATORS this will do functionality like adding
  ]
})

export class MinValidator implements Validator{

  @Input('minimum') public value: number;

  validate(c: AbstractControl): { [key: string]: any; } {

   return  minimum(this.value)(c);
   
    // if(Validators.required(c))
    // return null;

    // if(c.value && c.value < this.value )
    // {
      
    //   return {'minimum': { value: this.value, actual:c.value}};
    // }

    // return null;

  }
  



}
