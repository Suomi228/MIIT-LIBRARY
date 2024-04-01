import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  template: `
    <section class="listing-apply">
        <h2 class="section-heading">Apply now to live here</h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()">

          <label for="email">Email</label>
          <input id="email" type="email" formControlName="email">
          <label for="password">Password</label>
          <input id="password" type="text" formControlName="password">
          <button type="submit" class="primary">Apply now</button>
        </form>
      </section>
  `,
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  authService = inject(AuthService);
  applyForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')

  });

  constructor() {
  }
  
  submitApplication() {
    this.authService.submitApplication(
      this.applyForm.value.email ?? '',
      this.applyForm.value.password ?? ''
    );
  }
}
