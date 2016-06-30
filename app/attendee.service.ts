import {Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Attendee} from './attendee';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class AttendeeService{

  private attendeesUrl = 'app/attendees';

  constructor(private http: Http) {}

  getAttendees():Promise<Attendee[]>{
    return this.http.get(this.attendeesUrl)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }

  getAttendee(id:number){
    return this.getAttendees()
      .then(attendees => attendees.filter(attendee => attendee.id === id)[0]);
  }

  // Save
  save(attendee: Attendee): Promise<Attendee>  {
    if (attendee.id) {
      return this.put(attendee);
    }
    return this.post(attendee);
  }

  // Delete
  delete(attendee: Attendee) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.attendeesUrl}/${attendee.id}`;

    return this.http
      .delete(url, headers)
      .toPromise()
      .catch(this.handleError);
  }

  // Add new Hero
  private post(attendee: Attendee): Promise<Attendee> {
    let headers = new Headers({
      'Content-Type': 'application/json'});

    return this.http
      .post(this.attendeesUrl, JSON.stringify(attendee), {headers: headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  // Update
  private put(attendee: Attendee) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.attendeesUrl}/${attendee.id}`;

    return this.http
      .put(url, JSON.stringify(attendee), {headers: headers})
      .toPromise()
      .then(() => attendee)
      .catch(this.handleError);
  }

  private handleError(error:any){
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
