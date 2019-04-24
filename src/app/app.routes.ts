import { Routes, RouterModule } from '@angular/router';

import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const appRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      {path: 'page-one', component: PageOneComponent},
      {path: 'page-two', component: PageTwoComponent}
    ]
  }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
