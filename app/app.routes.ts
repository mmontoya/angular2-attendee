import { provideRouter, RouterConfig } from '@angular/router';
import { DashboardComponent } from "./dashboard.component";
import { AttendeesComponent } from './attendees.component';
import {AttendeeDetailComponent} from "./attendee-detail.component";

export const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/dashboard',
    terminal: true
  },

  {
    path: 'dashboard',
    component: DashboardComponent
  },

  {
    path: 'detail/:id',
    component: AttendeeDetailComponent
  },

  {
    path: 'attendees',
    component: AttendeesComponent
  }

];

export const APP_ROUTER_PROVIDERS = [

  provideRouter(routes)

];
