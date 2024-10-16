import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: WelcomeComponent,
      },
    ]),
  ],
})
export class WelcomeModule {}
