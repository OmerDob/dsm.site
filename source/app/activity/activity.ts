export class Activity {
    id: any;
    name: string;
    startDate: Date;
    endDate: Date;
    location: string;
    description: string;

    constructor(activity?: {_id?, name?, startDate?, endDate?, location?, description?}) {
        activity = activity || {
            startDate: Date.now(),
            endDate: Date.now()
        };

        this.id = activity._id;
        this.name = activity.name;
        this.startDate = new Date(activity.startDate);
        this.endDate = new Date(activity.endDate);
        this.location = activity.location;
        this.description = activity.description;
    }
}