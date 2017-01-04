import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ActivityModule } from './activity/activity.module';
import { ActivityRoutingModule } from './activity/activity-routing.module';

import { DsmAppComponent } from './dsm-app.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([]),
        ActivityModule
    ],
    declarations: [
        DsmAppComponent
    ],
    bootstrap: [DsmAppComponent]
})
export class DsmAppModule {}