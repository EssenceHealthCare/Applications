import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./nav-site/nav-site.module').then((m) => m.NavSiteModule),
  },
];
