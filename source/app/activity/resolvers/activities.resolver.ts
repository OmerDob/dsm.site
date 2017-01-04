import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Activity } from '../activity';
import { ActivityService } from '../activity.service';

@Injectable()
export class ActivitiesResolver implements Resolve<Activity[]> {
    constructor(private activityService: ActivityService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Activity[]> {
        return this.activityService.getActivities();
    }
}