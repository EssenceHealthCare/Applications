import { Component, OnInit } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import appActions from './^state/app.actions';
import { StorageService } from './shared/services/storage.service';
import { StorageEnum } from './shared/enums/enums';
import authActions from './auth/^state/auth.actions';

@Component({
  selector: 'care-web-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly breakpointObserver: BreakpointObserver,
    private readonly store: Store,
    private readonly storage: StorageService
  ) {}

  ngOnInit() {
    this.assertUser();

    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .pipe(map((b) => b.matches))
      .subscribe((m) => {
        this.store.dispatch(appActions.changeViewport({ isMobile: m }));
      });

    this.router.events.subscribe((event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          // this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          // this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  assertUser() {
    const user = this.storage.getItem(StorageEnum.User);
    console.log(user);
    if (user) {
      this.store.dispatch(authActions.login({ user }));
    }
  }
}
