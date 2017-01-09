import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DsmDateTimeComponent } from './components/dsm-date-time/dsm-date-time.component';
import { DsmInput } from './components/dsm-input/dsm-input.component';
import { DsmInputGroup } from './components/dsm-input-group/dsm-input-group.component';

import { RequiredDate } from './validators/required-date.directive';
import { DsmAscending } from './validators/dsm-ascending.directive';

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: [
        DsmDateTimeComponent,
        DsmInput,
        DsmInputGroup,

        RequiredDate,
        DsmAscending
    ],
    exports: [
        DsmDateTimeComponent,
        DsmInput,
        DsmInputGroup,
        
        RequiredDate,
        DsmAscending
    ]
})
export class DsmSharedModule {}