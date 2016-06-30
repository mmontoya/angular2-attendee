import { Component, EventEmitter, OnInit, OnDestroy, Output, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Attendee} from './attendee';
import { AttendeeService } from './attendee.service';


@Component({
  selector: 'my-attendee-detail',
  templateUrl: 'app/attendee-detail.component.html',
  styleUrls: ['app/attendee-detail.component.css']

})

export class AttendeeDetailComponent implements OnInit, OnDestroy{

  @Input() attendee:Attendee;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false;
  attendee: Attendee;
  sub:any;

  constructor(
    private attendeeService: AttendeeService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.navigated = true;
        this.attendeeService.getAttendee(id)
          .then(attendee => this.attendee = attendee);
      } else {
        this.navigated = false;
        this.attendee = new Attendee();
      }
    });
  }


  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  goBack(savedAttendee: Attendee = null) {
    this.close.emit(savedAttendee);
    if (this.navigated) { window.history.back(); }
  }


  save() {
    this.attendeeService
      .save(this.attendee)
      .then(attendee => {
        this.attendee = attendee; // saved hero, w/ id if new
        this.goBack(attendee);
      })
      .catch(error => this.error = error); // TODO: Display error message
  }

}
