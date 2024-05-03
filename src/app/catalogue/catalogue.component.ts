import {Component, Inject} from '@angular/core';
import {Router, RouterModule} from "@angular/router";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatCardContent, MatCardModule, MatCardTitle} from "@angular/material/card";
import {MatCheckbox, MatCheckboxModule} from "@angular/material/checkbox";
import {NgForOf} from "@angular/common";
import {GetBookResponse} from "../catalogue/requests/getBookRequest";
import {BookService} from "../services/book.service";
import {HttpClientModule} from "@angular/common/http";
import {BorrowedBooksService} from '../services/borrowed-books.service';
import {MatPaginatorModule, PageEvent,  MatPaginatorIntl} from '@angular/material/paginator';
import {CustomMatPaginatorIntl} from "../custom-materials/CustomMatPaginatorIntl";
@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [
    MatGridTile,
    MatGridList,
    MatCardTitle,
    MatCardContent,
    MatCheckbox,
    MatCheckboxModule,
    MatCardModule,
    NgForOf,
    HttpClientModule,
    RouterModule,
    MatPaginatorModule
  ],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.scss',
  providers: [BookService, BorrowedBooksService,
    {provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntl}
  ]
})
export class CatalogueComponent {
  constructor(private router: Router, private bookService: BookService, @Inject(BorrowedBooksService) private bBook: BorrowedBooksService) {
  }
  booksAmount: bigint = 100n;
  pageSize: number = 20;
  currentPage: number = 0;
  cards: GetBookResponse[] = [];

  ngOnInit(): void {
    this.getBooks(1, 20);
    this.getBooksAmount();
  }

  getBooks(page: number, size: number): void {
    this.bookService.getBooks(page, size).subscribe(response => {
      console.log(response);
      this.cards = response.books;
    });
  }
  getBooksAmount(): void {
    this.bookService.getBooksAmount().subscribe(response => {
      console.log(response)
      this.booksAmount = response.amount;
    });

  }
  onPageEvent(event: PageEvent): void {
    this.getBooks(event.pageIndex + 1, event.pageSize);
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    console.log(event);
  }
  checkboxes = ['Checkbox 1', 'Checkbox 2', 'Checkbox 3', 'Checkbox 4', 'Checkbox 5'];
}
