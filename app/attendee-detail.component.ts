import { Component, Input } from '@angular/core';
import {Attendee} from './attendee';


@Component({
  selector: 'my-attendee-detail',
  template: `
    <div *ngIf="attendee">
      <h2>{{attendee.name}} details!</h2>
      <div><label>id: </label>{{attendee.id}}</div>
        <div>
          <label>name: </label>
          <input [(ngModel)]="attendee.name" placeholder="name" />
        </div>
    </div>
  `
})

export class AttendeeDetailComponent{
  @Input()
  attendee: Attendee;
}
