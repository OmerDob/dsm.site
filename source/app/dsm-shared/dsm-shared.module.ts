import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DsmDateTimeComponent } from './dsm-date-time/dsm-date-time.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: [
        DsmDateTimeComponent
    ],
    exports: [
        DsmDateTimeComponent
    ]
})
export class DsmSharedModule {}