import { Component } from '@angular/core';
import { NgbModal, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { LoginModalComponent } from '../../auth/login-modal/login-modal.component';
import { SignupModalComponent } from '../../auth/signup-modal/signup-modal.component';
import { Store } from '@ngrx/store';
import authActions from '../../../../auth/^state/auth.actions';
import authSelectors from '../../../../auth/^state/auth.selectors';

@Component({
  selector: 'care-web-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isLoggedIn$ = this.store.select(authSelectors.isLoggedIn);
  isLoggedOut$ = this.store.select(authSelectors.isLoggedOut);

  constructor(
    private modalService: NgbModal,
    private readonly offCanvasService: NgbOffcanvas,
    private readonly store: Store
  ) {}

  login() {
    const modalRef = this.modalService.open(LoginModalComponent, {
      centered: true,
    });
  }

  signup() {
    const offCanvasRef = this.offCanvasService.open(SignupModalComponent, {
      animation: true,
      position: 'end',
    });
  }

  signout() {
    this.store.dispatch(authActions.logout());
  }
}
