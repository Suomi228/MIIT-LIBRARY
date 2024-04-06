import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomePageComponent} from "./home-page/home-page.component";

export const routes: Routes = [
  // obama.tplinkdns.com + path
  { path: "home" ,component: HomePageComponent },
  { path: "" ,component: LoginComponent },
];
