import { Component } from '@angular/core';
import { NgbActiveModal, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { SignupModalComponent } from '../signup-modal/signup-modal.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../api/auth-api';

@Component({
  selector: 'care-web-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent {
  form: FormGroup = new FormGroup({});
  submitted = false;

  constructor(
    public activeModal: NgbActiveModal,
    private readonly offCanvasService: NgbOffcanvas,
    private readonly fb: FormBuilder,
    private readonly authService: AuthService
  ) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.authService.login(this.form.value).subscribe((user) => {
      console.log(user);
    });
  }

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
