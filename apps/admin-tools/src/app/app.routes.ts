import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: NxWelcomeComponent,
        pathMatch: 'full',
    },
    {
        path: 'calendar',
        loadChildren: () =>
            import('./components/calendar/calenedar.routes').then((m) => m.CalendarRoutes),
    }
];