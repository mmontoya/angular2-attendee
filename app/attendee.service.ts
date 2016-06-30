import {Injectable} from '@angular/core';
import {ATTENDEES} from './mock-attendees';
import {Attendee} from './attendee';



@Injectable()
export class AttendeeService{

  getAttendees(){
    return Promise.resolve(ATTENDEES);
  }

  getAttendeesSlowly(){
    return new Promise<Attendee[]>(resolve => setTimeout(()=> resolve(ATTENDEES), 2000))
  }

  getAttendee(id:number){
    return this.getAttendees()
      .then(attendees => attendees.filter(attendee => attendee.id === id)[0]);
  }

}
