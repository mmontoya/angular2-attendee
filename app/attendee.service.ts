import {Injectable} from '@angular/core';
import {ATTENDEES} from './mock-attendees';



@Injectable()
export class AttendeeService{

  getAttendees(){
    return Promise.resolve(ATTENDEES);
  }

}
