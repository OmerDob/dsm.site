import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Activity } from './activity';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ActivityService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private baseAddress = 'http://localhost:3030/activity';

    constructor(private http: Http) {}

    getActivities(): Promise<Activity[]> {
        return this.http.get(this.baseAddress)
            .toPromise()
            .then(res => res.json() as {}[])
            .then(activities => activities.map(activity => new Activity(activity)))
            .catch(this.handleError);
    }

    createActivity(activity: Activity): Promise<void> {
        return this.http.post(
            this.baseAddress,
            JSON.stringify({activity: activity}),
            {headers: this.headers})
            .toPromise()
            .then(res => undefined)
            .catch(this.handleError);
    }

    getActivityById(activityId: string): Promise<Activity> {
        return this.http.get(`${this.baseAddress}/${activityId}`)
            .toPromise()
            .then(res => new Activity(res.json()))
            .catch(this.handleError);
    }

    updateActivity(activity: Activity): Promise<void> {
        return this.http.put(
            this.baseAddress,
            JSON.stringify({activity: activity}),
            {headers: this.headers})
            .toPromise()
            .then(res => undefined)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }
}