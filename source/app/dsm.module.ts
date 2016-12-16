import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DsmComponent } from './dsm.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        DsmComponent
    ],
    bootstrap: [DsmComponent]
})
export class DsmModule {}