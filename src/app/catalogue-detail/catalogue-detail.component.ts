import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { GetBookResponse } from '../catalogue/requests/getBookRequest';
import { BookService } from '../services/book.service';
import {MatCardContent, MatCardModule, MatCardTitle} from "@angular/material/card";
import { HttpClientModule } from '@angular/common/http';
import { BorrowedBooksService } from '../services/borrowed-books.service';
import { CreateLoanResponse } from '../catalogue/requests/createLoanRequest';

@Component({
  selector: 'app-catalogue-detail',
  standalone: true,
  imports: [RouterModule,HttpClientModule,MatCardContent,MatCardModule],
  templateUrl: './catalogue-detail.component.html',
  styleUrl: './catalogue-detail.component.scss',
  providers: [BookService, BorrowedBooksService]
})
export class CatalogueDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  book: GetBookResponse | undefined;
  bookService = inject(BookService);
  borrowedBookService = inject(BorrowedBooksService);
  bookId: number;
  loan: CreateLoanResponse = {bookId: this.getBookId()}
  constructor() {
    this.bookId = Number(this.route.snapshot.params['id']);
  }
  ngOnInit(): void {
    this.getBookById();
  }
  getBookById(){
    this.bookService.getBook(this.bookId).subscribe(response=>{
      this.book=response;
    });
  }
  getBookId(){
    return this.bookId = Number(this.route.snapshot.params['id']);
  }
  addLoanBook(){
    this.borrowedBookService.addBook(this.loan);
    // console.log(this.loan.bookId)
  }
  
}
