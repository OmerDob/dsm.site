import { Directive, forwardRef } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
    selector: '[requiredDate][ngModel]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => RequiredDate),
            multi: true
        }
    ]
})
export class RequiredDate implements Validator {
    validate(control: FormControl) {
        let dateValue = new Date(control.value);

        return dateValue && !isNaN(dateValue.getTime()) ? null : {required: true};
    }
}