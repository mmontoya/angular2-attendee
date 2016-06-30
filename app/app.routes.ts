import { provideRouter, RouterConfig } from '@angular/router';
import { AttendeesComponent } from './attendees.component';

export const routes: RouterConfig = [
  {
    path: 'attendees',
    component: AttendeesComponent
  }

];

export const APP_ROUTER_PROVIDERS = [

  provideRouter(routes)

];
