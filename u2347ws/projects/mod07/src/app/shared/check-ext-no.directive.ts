import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[CheckExtNo]',
  providers:[
    {
      provide:NG_VALIDATORS,
      useExisting: CheckExtNoDirective,
      multi: true
    }
  ]
})
export class CheckExtNoDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    let extNo: number = parseInt(control.value);
    let result = null;

    if (extNo < 1000 || extNo >1999)
    result = { "CheckExtNo": {
      actualValue: extNo,
      requiredValue: '分機號碼必須介於1000-1999之間'
    }}

    return result;
  }

}
