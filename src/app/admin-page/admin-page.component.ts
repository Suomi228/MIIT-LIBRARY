import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import {MatChipListbox, MatChipOption} from "@angular/material/chips";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatButtonModule, MatDividerModule, MatCardModule, MatDatepickerModule, MatChipListbox, MatChipOption,MatInputModule,MatFormFieldModule,FormsModule],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss'
})
export class AdminPageComponent {
  selected: Date | null | undefined;
  constructor(private router: Router) { }
  zalupa() {
    console.log("ухй")
  }
  getUrl() {
    return "url('http://estringsoftware.com/wp-content/uploads/2017/07/estring-header-lowsat.jpg')";
  }
}


