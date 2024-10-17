import { Component } from '@angular/core';
import { NgbModal, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { LoginModalComponent } from '../../auth/login-modal/login-modal.component';
import { SignupModalComponent } from '../../auth/signup-modal/signup-modal.component';

@Component({
  selector: 'care-web-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private modalService: NgbModal,
    private readonly offCanvasService: NgbOffcanvas
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
}
