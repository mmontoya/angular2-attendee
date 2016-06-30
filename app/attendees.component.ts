import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {Attendee} from './attendee';
import {AttendeeService} from "./attendee.service";
import {AttendeeDetailComponent } from './attendee-detail.component';


@Component({
    selector: 'my-attendees',
    templateUrl: 'app/attendees.component.html',
    styleUrls: ['app/attendees.component.css'],
    directives: [AttendeeDetailComponent]
})

export class AttendeesComponent implements OnInit {

  attendees: Attendee[];
  selectedAttendee: Attendee;
  addingAttendee = false;
  error:any;

  constructor(
    private router: Router,
    private attendeeService: AttendeeService){

  }

  getAttendees(){
    this.attendeeService
      .getAttendees()
      .then(attendees => this.attendees = attendees)
      .catch(error => this.error = error);
  }

  addAttendee() {
    this.addingAttendee = true;
    this.selectedAttendee = null;
  }

  deleteAttendee(attendee: Attendee, event: any) {
    event.stopPropagation();
    this.attendeeService
      .delete(attendee)
      .then(res => {
        this.attendees = this.attendees.filter(h => h !== attendee);
        if (this.selectedAttendee === attendee) { this.selectedAttendee = null; }
      })
      .catch(error => this.error = error);
  }

  close(savedAttendee: Attendee) {
    this.addingAttendee = false;
    if (savedAttendee) { this.getAttendees(); }
  }


  ngOnInit(){
    this.getAttendees();
  }

  onSelect(attendee: Attendee) {
    this.selectedAttendee = attendee;
    this.addingAttendee = false;
  }

  gotoDetail(){
    this.router.navigate(['/detail', this.selectedAttendee.id]);
  }






}

