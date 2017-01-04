import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DsmSharedModule } from '../dsm-shared/dsm-shared.module';
import { ActivityRoutingModule } from './activity-routing.module';

import { ActivityService } from './activity.service';

import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityDetailsComponent } from './activity-details/activity-details.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        DsmSharedModule,
        ActivityRoutingModule
    ],
    declarations: [
        ActivityListComponent,
        ActivityDetailsComponent
    ],
    providers: [ActivityService],
    exports: [
        ActivityListComponent,
        ActivityDetailsComponent
    ]
})
export class ActivityModule {}