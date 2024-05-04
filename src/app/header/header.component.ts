import {Component} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {HomePageComponent} from '../home-page/home-page.component';
import {CatalogueComponent} from '../catalogue/catalogue.component';
import {NAV_BAR} from '../constants';
import {CommonModule, NgFor} from '@angular/common';
import {AuthService} from "../services/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {RoleService} from "../services/reactive";
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, HomePageComponent, CatalogueComponent, NgFor, CommonModule, HttpClientModule,MatBadgeModule,MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [AuthService]
})
export class HeaderComponent {
  menus: any [] = [];
  filteredMenus: any [] = [];
  role: any = '';

  constructor(private router: Router, private authService: AuthService, private roleService: RoleService) {
    this.menus = NAV_BAR.menus;
    const token = localStorage.getItem('token')
    if (token != null) {
      this.role = localStorage.getItem('role')
    } else {
      this.filteredMenus = this.menus
    }

    this.menus.forEach((element: any) => {
      const userRole = element.roles.some((role: any) => role == this.role)
      console.log('User-role' + userRole)
      if (userRole != false) {
        this.filteredMenus.push(element);
      }
    });

    this.roleService.roleChanged.subscribe(role => {
        console.log('Role changed: ' + role)
        this.role = role;
        this.filteredMenus = this.menus.filter(menu => menu.roles.includes(role));
      },
      error => {
        console.log('Error: ' + error);
      },
      () => {
        console.log('Completed!');
      })
  }


  isRoute(route: string) {
    let a = this.router.url === route;
    console.log(`${route} ${this.router.url}  ${a}`);
    return this.router.url === route;
  }

}
