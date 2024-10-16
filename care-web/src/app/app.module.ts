import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { SharedModule } from './shared/shared.module';
import { AUTH_BASE_URL } from './shared/api/auth-api';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    SharedModule,
  ],
  providers: [
    {
      provide: AUTH_BASE_URL,
      useValue: 'https://localhost:7061',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
