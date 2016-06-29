import {Injectable} from '@angular/core';
import {ATTENDEES} from './mock-attendees';



@Injectable()
export class AttendeeService{

  getAttendees(){
    return Promise.resolve(ATTENDEES);
  }

  getAttendeesSlowly(){
    return new Promise<Attendee[]>(resolve => setTimeout(()=> resolve(ATTENDEES),2000))
  }

}
