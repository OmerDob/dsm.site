import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'dsm-input',
    templateUrl: './dsm-input.component.html'
})
export class DsmInput {
    @Input('fieldName') fieldName: string;
    @Input('form') form: NgForm;
    @Input('errors') errors;
    @Input('errorMessages') errorMessages;

    get errorMessage(): string {
        let errorMessages = 
            !this.errors ?
            undefined :
            Object.keys(this.errors)
            .filter(error => this.errorMessages[error])
            .map(error => this.errorMessages[error]);
        
        return errorMessages ? errorMessages[0] : '';
    }
}