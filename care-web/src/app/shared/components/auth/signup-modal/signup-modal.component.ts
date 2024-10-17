import { Component, Input } from '@angular/core';
import { NgbActiveOffcanvas, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../api/auth-api';

@Component({
  selector: 'care-web-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.scss'],
})
export class SignupModalComponent {
  form: FormGroup = new FormGroup({});
  submitted = false;

  constructor(
    private modalService: NgbModal,
    public readonly activeOffcanvas: NgbActiveOffcanvas,
    private readonly fb: FormBuilder,
    private readonly authService: AuthService
  ) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
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

    this.form.value.roles = ['user'];
    console.log(this.form.value);

    this.authService.register(this.form.value).subscribe((user) => {
      console.log(user);
    });
  }

  login() {
    this.activeOffcanvas.dismiss('login');

    setTimeout(() => {
      const modalRef = this.modalService.open(LoginModalComponent, {
        centered: true,
      });
    }, 100);
  }
}
