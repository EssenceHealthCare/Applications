import { Component } from '@angular/core';
import { NgbActiveModal, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { SignupModalComponent } from '../signup-modal/signup-modal.component';

@Component({
  selector: 'care-web-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent {
  constructor(
    public activeModal: NgbActiveModal,
    private readonly offCanvasService: NgbOffcanvas
  ) {}

  signup() {
    this.activeModal.close();

    setTimeout(() => {
      const offCanvasRef = this.offCanvasService.open(SignupModalComponent, {
        animation: true,
        position: 'end',
      });
    }, 100);
  }
}
