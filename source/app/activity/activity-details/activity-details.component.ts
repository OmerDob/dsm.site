import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm, NgControl } from '@angular/forms';

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
    @ViewChild('activityForm') activityForm: NgForm;

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
        if (this.activityForm.valid) {
            var savePromise: Promise<void>;

            if (!this.activity.id) {
                savePromise = this.activityService.createActivity(this.activity);
            } else {
                savePromise = this.activityService.updateActivity(this.activity);
            }

            savePromise.then(() => this.router.navigate(['/']));
        }
    }
}