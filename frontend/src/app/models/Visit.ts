export class Visit {
    topic: string;
    employee: string;
    partner: string;
    comments: string;
    date: Date;

    constructor(topic, employee, partner, comments, date) {
        this.topic = topic;
        this.employee = employee;
        this.partner = partner;
        this.comments = comments;
        this.date = date;
    }

}
