import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'dsm-date-time',
    templateUrl: './dsm-date-time.component.html',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DsmDateTimeComponent),
        multi: true
    }]
})
export class DsmDateTimeComponent implements ControlValueAccessor {
    private _completeDate: Date;
    private notifyTouched: () => void;
    private notifyChanged: (value) => void;

    constructor() {
        this._completeDate = new Date();
        this.notifyTouched = () => {};
        this.notifyChanged = value => {};
    }

    writeValue(value: Date): void {
        if (value && value != this._completeDate) {
            this._completeDate = value;
        }
    }

    registerOnChange(fn): void {
        this.notifyChanged = fn;
    }

    registerOnTouched(fn): void {
        this.notifyTouched = fn;
    }

    get completeDate(): Date {
        return this._completeDate;
    }

    set date(value) {
        var newDate = new Date(value);

        this._completeDate.setFullYear(newDate.getFullYear());
        this._completeDate.setMonth(newDate.getMonth());
        this._completeDate.setDate(newDate.getDate());

        this.notifyChanged(this._completeDate);
    }

    set time(value) {
        var newTime = new Date(`1970-01-01 ${value}`);

        this._completeDate.setHours(newTime.getHours());
        this._completeDate.setMinutes(newTime.getMinutes());
        this._completeDate.setSeconds(newTime.getSeconds());
        this._completeDate.setMilliseconds(newTime.getMilliseconds());

        this.notifyChanged(this._completeDate);
    }
}