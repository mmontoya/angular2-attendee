import { Component }       from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AttendeeService }     from './attendee.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <a [routerLink]="['/attendees']">Attendees</a>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    AttendeeService
  ]
})
export class AppComponent {
  title = 'PMU Collective';
}
