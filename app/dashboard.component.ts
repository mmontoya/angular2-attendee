import { Component, OnInit} from '@angular/core';
import { Attendee } from './attendee';
import { AttendeeService } from './attendee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  attendees: Attendee[] = [];

  constructor(private router: Router,
    private attendeeService:AttendeeService) { }

  ngOnInit(){
    this.attendeeService.getAttendees()
      .then(attendees => this.attendees = attendees.slice(1,5))
  }

  gotoDetail(attendee: Attendee) {
    let link = ['/detail', attendee.id];
    this.router.navigate(link);
  }

}
