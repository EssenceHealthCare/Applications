import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SidenavComponent } from './components/layout/sidenav/sidenav.component';
import { LoginModalComponent } from './components/auth/login-modal/login-modal.component';
import { SignupModalComponent } from './components/auth/signup-modal/signup-modal.component';
import { ResetPasswordModalComponent } from './components/auth/reset-password-modal/reset-password-modal.component';
import { ConfirmAccountModalComponent } from './components/auth/confirm-account-modal/confirm-account-modal.component';
import { ForgotPasswordModalComponent } from './components/auth/forgot-password-modal/forgot-password-modal.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    LoginModalComponent,
    SignupModalComponent,
    ResetPasswordModalComponent,
    ConfirmAccountModalComponent,
    ForgotPasswordModalComponent,
  ],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, NgbModule],
  exports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    HeaderComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
