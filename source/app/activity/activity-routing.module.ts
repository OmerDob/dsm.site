import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityDetailsComponent } from './activity-details/activity-details.component';

import { ActivitiesResolver } from './resolvers/activities.resolver';
import { ActivityResolver } from './resolvers/activity.resolver';

const routes: Routes = [
    {path: '', pathMatch: 'full', component: ActivityListComponent, resolve: {activities: ActivitiesResolver}},
    {path: 'activity', component: ActivityDetailsComponent},
    {path: 'activity/:id', component: ActivityDetailsComponent, resolve: {activity: ActivityResolver}}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
        ActivitiesResolver,
        ActivityResolver
    ]
})
export class ActivityRoutingModule {}