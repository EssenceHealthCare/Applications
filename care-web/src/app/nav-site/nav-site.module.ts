import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavSiteComponent } from './nav-site.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavSiteComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full',
      },
      {
        path: 'welcome',
        component: NavSiteComponent,
        loadChildren: () =>
          import('../welcome/welcome.module').then((m) => m.WelcomeModule),
      },
    ]),
  ],
})
export class NavSiteModule {}
