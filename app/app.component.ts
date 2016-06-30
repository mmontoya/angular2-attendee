import { Component }       from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AttendeeService }     from './attendee.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
      <a [routerLink]="['/attendees']" routerLinkActive="active">Attendees</a>
    </nav>

    <router-outlet></router-outlet>
  `,
  styleUrls:['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    AttendeeService
  ]
})
export class AppComponent {
  title = 'PMU Collective';
}
