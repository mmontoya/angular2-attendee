import { Component }       from '@angular/core';
import { AttendeeService }     from './attendee.service';
import { AttendeesComponent } from './attendees.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <my-attendees></my-attendees>
  `,
  directives: [AttendeesComponent],
  providers: [
    AttendeeService
  ]
})
export class AppComponent {
  title = 'Tour of Heroes';
}
