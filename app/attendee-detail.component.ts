import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Attendee} from './attendee';
import { AttendeeService } from './attendee.service';


@Component({
  selector: 'my-attendee-detail',
  templateUrl: 'app/attendee-detail.component.html',
  styleUrls: ['app/attendee-detail.component.css']

})

export class AttendeeDetailComponent implements OnInit, OnDestroy{

  attendee: Attendee;
  sub:any;

  constructor(
    private attendeeService: AttendeeService,
    private route: ActivatedRoute) {
  }

  ngOnInit(){
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.attendeeService.getAttendee(id)
        .then(attendee => this.attendee = attendee);
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  goBack() {
    window.history.back();
  }
}
