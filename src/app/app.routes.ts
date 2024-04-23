import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {CatalogueComponent} from "./catalogue/catalogue.component";
import { PassBookComponent } from './pass-book/pass-book.component';
import { CatalogueDetailComponent } from './catalogue-detail/catalogue-detail.component';

export const routes: Routes = [
  // obama.tplinkdns.com + path
  { path: "home" ,component: HomePageComponent },
  { path: "login" ,component: LoginComponent },
  { path: "" ,component: HomePageComponent },
  {path: "catalogue", component: CatalogueComponent},
  {path: "pass-book", component: PassBookComponent},
  {path: "details/:id", component: CatalogueDetailComponent},
];
