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
    <section class="container">
        <div class="card">
          <img class= "logo" src="https://miit.ru/content/T_rus.svg?id_wm=867987" alt="Транспортный университет">
          <form [formGroup]="applyForm" (submit)="submitApplication()">
            <label for="email">Почта</label>
            <input id="email" type="email" formControlName="email">
            <label for="password">Пароль</label>
            <input id="password" type="text" formControlName="password">
            <div style="text-align:center">
              
                <button type="submit" class="log-btn">Войти</button>
            </div>
            <div style="margin-top: 50px;">
              <p style="text-align: center;">Забыли пароль?</p>
              <p style="text-align: center;">Нет учетной записи? Зарегистрироваться</p>
            </div>
          </form>
        </div>
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
