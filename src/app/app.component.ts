import { Component } from '@angular/core';

import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent],
  template: `
  <main class="body">
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
    </header>
    <section class="content">
      <app-login></app-login>
    </section>
  </main>
`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MIIT-LIBRARY';
}
