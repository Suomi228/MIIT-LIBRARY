import { Component } from '@angular/core';

import { LoginComponent } from './login/login.component';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent, RouterOutlet],
  template: `
  <main class="body">
    <section class="content">
<!--      <app-login></app-login>-->
      <router-outlet></router-outlet>
    </section>
  </main>
`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MIIT-LIBRARY';
}
