import { Directive, Input } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl, Validators } from '@angular/forms';
import { maximum } from './validation-util';

@Directive({
  selector: '[ngModel][maximum]',
  providers:[
    {provide:NG_VALIDATORS, useExisting: MaxValidator, multi: true }
  ]
})

export class MaxValidator implements Validator{

  @Input('maximum') public value: number;

  validate(c: AbstractControl): { [key: string]: any; } {

    return maximum(this.value)(c);

    // if(Validators.required(c))
    // return null;

    // if(c.value && c.value > this.value )
    // {
    //   return {'maximum': { value: this.value, actual:c.value}};
    // }

    // return null;
    //throw new Error("Method not implemented.");
  }
  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error("Method not implemented.");
  // }



}
