import {Component} from '@angular/core';

export class Attendee {
  name: string;
  id : number;
}

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
      <div *ngIf="selectedAttendee">
        <h2>{{selectedAttendee.name}} details!</h2>
        <div><label>id: </label>{{selectedAttendee.id}}</div>
        <div>
          <label>name: </label>
          <input [(ngModel)]="selectedAttendee.name" placeholder="name">
        </div>
      </div>
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

    `]
})

export class AppComponent {

  title:string = 'Plataci Attendeess';
  public attendees = ATTENDEES;

  selectedAttendee: Attendee;

  onSelect(attendee: Attendee) { this.selectedAttendee = attendee; }
}

const ATTENDEES: Attendee[] = [
  {id: 1, name: 'Federico' },
  {id: 2, name: 'Angelo' },
  {id: 3, name: 'Abramova' },
  {id: 4, name: 'Gaia' },
  {id: 5, name: 'Michael' },
  {id: 6, name: 'Finu' },
  {id: 7, name: 'Matteo' },
  {id: 8, name: 'Carmen' }
];




