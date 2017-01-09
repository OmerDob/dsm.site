import { Directive, forwardRef } from '@angular/core';
import { Validator, NG_VALIDATORS, FormGroup} from '@angular/forms';

@Directive({
    selector: '[dsmAscending][ngModelGroup]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => DsmAscending),
        multi: true
    }]
})
export class DsmAscending implements Validator {
    validate(formGroup: FormGroup): any {
        let valid = true;

        Object.keys(formGroup.controls).forEach((key, index, keys) => {
            if (index > 0) {
                let prevKey = keys[index - 1];

                valid = valid && (formGroup.controls[prevKey].value <= formGroup.controls[key].value);
            }
        });

        return valid ? null : {dsmAscending: false};
    }
}