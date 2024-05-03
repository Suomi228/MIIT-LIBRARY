import {Component} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {HomePageComponent} from '../home-page/home-page.component';
import {CatalogueComponent} from '../catalogue/catalogue.component';
import { NAV_BAR } from '../constants';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, HomePageComponent, CatalogueComponent,NgFor,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
// NEW COMMIT
  menus:any [] = [];
  filteredMenus:any [] = [];
  role: any = '';
  constructor(private router: Router) {
    this.menus = NAV_BAR.menus;
    const token = localStorage.getItem('token')
    if (token!= null){
        this.role = localStorage.getItem('role')
    }

    this.menus.forEach((element: any)=>{
      const userRole = element.roles.some((role: any)=>role == this.role)
      console.log(userRole)
      if (userRole!= undefined){
        this.filteredMenus.push(element);
      }
    });

  }
// NEW COMMIT

  isRoute(route: string) {
    return this.router.url === route;
  }

}
