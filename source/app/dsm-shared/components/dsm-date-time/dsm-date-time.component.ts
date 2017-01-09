import { Component, forwardRef } from '@angular/core';
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
    private _date: string;
    private _time: string;
    private touchedCallback: () => void;
    private changedCallback: (value) => void;

    constructor() {
        this.touchedCallback = () => {};
        this.changedCallback = value => {};
    }

    writeValue(value: Date): void {
        if (value && value != this.completeDate) {
            let year = value.getFullYear();
            let month = this.completeToTwoDigits(value.getMonth() + 1);
            let day = this.completeToTwoDigits(value.getDate());
            let hours = this.completeToTwoDigits(value.getHours());
            let minutes = this.completeToTwoDigits(value.getMinutes());

            this.date = `${year}-${month}-${day}`;
            this.time = `${hours}:${minutes}`;
        }
    }

    registerOnChange(fn): void {
        this.changedCallback = fn;
    }

    registerOnTouched(fn): void {
        this.touchedCallback = fn;
    }

    private get completeDate(): Date {
        return new Date(`${this._date} ${this._time}`);
    }

    get date(): string {
        return this._date;
    }

    set date(value: string) {
        if (value != this._date) {
            this._date = value;

            this.notifyChange();
        }
    }

    get time(): string {
        return this._time;
    }

    set time(value: string) {
        if (value != this._time) {
            this._time = value ? value : NaN.toString();

            this.notifyChange();
        }
    }

    private notifyChange() {
        this.changedCallback(this.completeDate);
    }

    private completeToTwoDigits(num: number): string {
        return ('0' + num).slice(-2);
    }
}