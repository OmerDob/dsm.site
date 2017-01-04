import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Activity } from '../activity';

@Component({
    moduleId: module.id,
    selector: 'activity-list',
    templateUrl: './activity-list.component.html'
})
export class ActivityListComponent implements OnInit {
    activities: Activity[];

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this.activatedRoute.data.subscribe((data: {activities: Activity[]}) => this.activities = data.activities);
    }

    editActivity(activity: Activity) {
        this.router.navigate(['/activity', activity.id]);
    }
}