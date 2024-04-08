import { Component } from '@angular/core';

import { LoginComponent } from './login/login.component';
import {RouterOutlet} from "@angular/router";
import { HomePageComponent } from './home-page/home-page.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomePageComponent,CatalogueComponent,HeaderComponent],
  template: `
  <main class="body">
  <app-header></app-header>
    <section class="content">
    
<!--      <app-login></app-login>-->
      <!-- <app-home-page></app-home-page> -->
      <!-- <app-catalogue></app-catalogue> -->
    </section>
  </main>
`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MIIT-LIBRARY';
}
