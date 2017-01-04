import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Activity } from '../activity';
import { ActivityService } from '../activity.service';

import 'rxjs/add/operator/map';

@Component({
    moduleId: module.id,
    selector: 'dsm-activity-details',
    templateUrl: './activity-details.component.html'
})
export class ActivityDetailsComponent implements OnInit {
    @Input() activity: Activity;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private activityService: ActivityService) {}

    ngOnInit(): void {
        this.activatedRoute.data
            .map((data: {activity: Activity}) => data.activity || new Activity())
            .subscribe((activity: Activity) => {
                this.activity = activity;
            });
    }

    saveActivity() {
        var savePromise: Promise<void>;

        if (!this.activity.id) {
            savePromise = this.activityService.createActivity(this.activity);
        } else {
            savePromise = this.activityService.updateActivity(this.activity);
        }

        savePromise.then(() => this.router.navigate(['/']));
    }
}