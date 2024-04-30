import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import {MatChipListbox, MatChipOption} from "@angular/material/chips";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {ChangeDetectionStrategy} from '@angular/core';
import {ScrollingModule} from '@angular/cdk/scrolling';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatCardModule, MatDatepickerModule, MatChipListbox, MatChipOption,MatInputModule,
    MatFormFieldModule,FormsModule,MatTooltipModule, MatIconModule,MatButtonModule,ScrollingModule],
  templateUrl: './admin-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './admin-page.component.scss',
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
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
}


