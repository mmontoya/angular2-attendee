import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {Attendee} from './attendee';
import {AttendeeService} from "./attendee.service";


@Component({
    selector: 'my-attendees',
    templateUrl: 'app/attendees.component.html',
    styleUrls: ['app/attendees.component.css']
})

export class AttendeesComponent implements OnInit {

  attendees: Attendee[];
  selectedAttendee: Attendee;

  constructor(
    private router: Router,
    private attendeeService: AttendeeService){

  }

  getAttendees(){
    this.attendeeService.getAttendees()
      .then(attendees => this.attendees = attendees);
  }

  ngOnInit(){
    this.getAttendees();
  }

  onSelect(attendee: Attendee) {
    this.selectedAttendee = attendee;
  }

  gotoDetail(){
    this.router.navigate(['/detail', this.selectedAttendee.id]);
  }

}

