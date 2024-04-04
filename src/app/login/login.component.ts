import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from "@angular/common/http";
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    HttpClientModule
  ],
  template: `
    <section class="container">
        <div class="card">
          <img class= "logo" src="https://miit.ru/content/T_rus.svg?id_wm=867987" alt="Транспортный университет">
          <form [formGroup]="applyForm" (submit)="submitApplication()">
            <label for="email">Почта</label>
            <input id="email" type="email" formControlName="email">
            <label for="password">Пароль</label>
            <input id="password" type="primary" formControlName="password">
            <div style="text-align:center">
              <button mat-flat-button color="primary">Войти</button>
<!--                <button type="submit" class="log-btn">Войти</button>-->
            </div>
            <div style="margin-top: 50px;">
              <p style="text-align: center;">Забыли пароль?</p>
              <p style="text-align: center;">Нет учетной записи? Зарегистрироваться</p>
            </div>
          </form>
        </div>
      </section>
  `,
  styleUrl: './login.component.scss',
  providers : [AuthService]
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
