import { Component } from '@angular/core';

import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent],
  template: `
  <main class="body">
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
