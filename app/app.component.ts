import {Component} from '@angular/core';
import {Attendee} from './attendee';
import {AttendeeDetailComponent} from './attendee-detail.component';
import {AttendeeService} from "./attendee.service";
import {OnInit} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
      <h1>{{title}}</h1>
      <h2>The Attendees</h2>
      <ul class="attendees">
        <li *ngFor ="let attendee of attendees"
          [class.selected]="attendee === selectedAttendee"
          (click)="onSelect(attendee)">
          <!-- each attendee goes here -->
          <span class="badge">{{attendee.id}}</span> {{attendee.name}}
        </li>
      </ul>
      <my-attendee-detail [attendee]="selectedAttendee"></my-attendee-detail>

      `,
    styles: [`

      .selected {
        background-color: #CFD8DC !important;
        color: white;
      }

      .attendees {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 15em;
      }

      .attendees li {

        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0;
        height: 1.6em;
        border-radius: 4px;

      }

      .attendees li.selected:hover {
        background-color: #BBD8DC !important;
        color: white;
      }

      .attendees li:hover {
        color: #607D8B;
        background-color: #DDD;
        left: .1em;
      }

      .attendees .text {
        position: relative;
        top: -3px;
      }

      .attendees .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0 0 4px

      }

    `],
  directives: [AttendeeDetailComponent],
  providers: [AttendeeService]
})

export class AppComponent implements OnInit {

  ngOnInit(){
    this.getAttendees();
  }

  title:string = 'Plataci Attendeess';

  selectedAttendee: Attendee;

  onSelect(attendee: Attendee) { this.selectedAttendee = attendee; }

  attendees: Attendee[];

  constructor(private attendeeService: AttendeeService){

  }

  getAttendees(){
    this.attendeeService.getAttendeesSlowly().then(attendees => this.attendees = attendees);
  }
}

