import {Component} from '@angular/core';

export class Attendee {
  name: string;
  id : number;
}

@Component({
    selector: 'my-app',
    template: `
      <h1>{{title}}</h1>
      <h2>{{attendee.name}} details!</h2>
      <div><label>id: </label>{{attendee.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="attendee.name" placeholder="name">
      </div>
      `
})

export class AppComponent {

  title:string = 'Plataci Attendees';

  attendee: Attendee = {
    id: 1,
    name: 'Federico'
  };
}

