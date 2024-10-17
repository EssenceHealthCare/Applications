import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import * as AuthActions from './auth.actions';
import { Router } from '@angular/router';
import { StorageService } from '../../shared/services/storage.service';
import { StorageEnum } from '../../shared/enums/enums';

@Injectable()
export class AuthEffects {
  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.login),
        tap((action) => {
          this.storage.setItem(StorageEnum.User, action.user);
        })
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap((action) => {
          this.storage.removeItem(StorageEnum.User);
          this.router.navigateByUrl('/login');
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private storage: StorageService
  ) {}
}
