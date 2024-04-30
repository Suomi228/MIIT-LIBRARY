import {ChangeDetectorRef, Component} from '@angular/core';
import {Router} from "@angular/router";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatChipListbox, MatChipOption} from "@angular/material/chips";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {ChangeDetectionStrategy} from '@angular/core';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {BookService} from "../services/book.service";
import {HttpClientModule} from "@angular/common/http";
import {GetBookResponse} from "../catalogue/requests/getBookRequest";
import {MatListModule} from '@angular/material/list';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-admin-page',
  standalone: true,
  providers: [provideNativeDateAdapter(), BookService],
  imports: [MatCardModule, MatDatepickerModule, MatChipListbox, MatChipOption, MatInputModule,
    MatFormFieldModule, FormsModule, MatTooltipModule, MatIconModule, MatButtonModule, ScrollingModule, MatButtonModule, MatDividerModule, HttpClientModule, MatListModule, NgForOf],
  templateUrl: './admin-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './admin-page.component.scss',
})
export class AdminPageComponent {
  selected: Date | null | undefined;
  searchTerm: string = "";
  books: GetBookResponse[] = [];
  selectedBook: GetBookResponse | null = null;

  constructor(private router: Router, private bookservice: BookService, private cd: ChangeDetectorRef) {

  }

  searchBooks(term: string) {
    this.bookservice.getBooksByTitle(term).subscribe(response => {
      console.log(response);
      this.books = response.books;
      //this.books.sort((a, b) => a.id - b.id); // sort by id
      this.books.sort((a, b) => a.title.localeCompare(b.title)); // sort by title
      this.cd.detectChanges();
    });
    console.log(term); // Выводит поисковый запрос в консоль
  }

  selectBook(book: GetBookResponse) {
    console.log(book);

    this.selectedBook = book;
  }
}


