import { Component, Input } from '@angular/core';
import { NgModelGroup, NgForm } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'dsm-input-group[ngModelGroup]',
    templateUrl: './dsm-input-group.component.html',
    providers: [NgModelGroup]
})
export class DsmInputGroup {
    @Input('form') form: NgForm;
    @Input('errorMessages') errorMessages;

    constructor(private ngModelGroup: NgModelGroup) {}

    get errorMessage(): string {
        let errorMessages = 
            !this.ngModelGroup.errors ?
            undefined :
            Object.keys(this.ngModelGroup.errors)
            .filter(error => this.errorMessages[error])
            .map(error => this.errorMessages[error]);
        
        return errorMessages ? errorMessages[0] : '';
    }
}