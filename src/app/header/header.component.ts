import {Component} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {HomePageComponent} from '../home-page/home-page.component';
import {CatalogueComponent} from '../catalogue/catalogue.component';
import { NAV_BAR } from '../constants';
import { CommonModule, NgFor } from '@angular/common';
import { interval, switchMap, window } from 'rxjs';
import {AuthService} from "../services/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {RoleService} from "../services/reactive";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, HomePageComponent, CatalogueComponent,NgFor,CommonModule, HttpClientModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [AuthService]
})
export class HeaderComponent {
  menus:any [] = [];
  filteredMenus:any [] = [];
  role: string = '';
  constructor(private router: Router, private authService: AuthService, private roleService: RoleService) {
    this.menus = NAV_BAR.menus;
    // const token = localStorage.getItem('token')
    // if (token!= null){
    //     this.role = localStorage.getItem('role')
    // }
    // else{
    //   this.filteredMenus=this.menus
    // }
    //
    // this.menus.forEach((element: any)=>{
    //   const userRole = element.roles.some((role: any)=>role == this.role)
    //   console.log('User-role'+userRole)
    //   if (userRole!=false){
    //     this.filteredMenus.push(element);
    //   }
    // });

    this.roleService.roleChanged.subscribe(role => {
        console.log('Role changed: ' + role)
      this.role = role;
      this.filteredMenus = this.menus.filter(menu => menu.roles.includes(role));
    },
      error => {  console.log('Error: ' + error); },
      () => { console.log('Completed!'); })
  }


  isRoute(route: string) {
    return this.router.url === route;
  }

}
