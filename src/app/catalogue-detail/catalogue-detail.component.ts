import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { GetBookResponse } from '../catalogue/requests/getBookRequest';
import { BookService } from '../services/book.service';
import {MatCardContent, MatCardModule, MatCardTitle} from "@angular/material/card";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-catalogue-detail',
  standalone: true,
  imports: [RouterModule,HttpClientModule,MatCardContent,MatCardModule],
  templateUrl: './catalogue-detail.component.html',
  styleUrl: './catalogue-detail.component.scss',
  providers: [BookService]
})
export class CatalogueDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  book: GetBookResponse | undefined;
  bookService = inject(BookService);
  bookId: number;
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
  
}
