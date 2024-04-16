import { NgFor } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { BorrowedBooksService } from '../services/borrowed-books.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateLoanResponse } from '../catalogue/requests/createLoanRequest';
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {GetLoanResponse} from "../catalogue/responses";
@Component({
  selector: 'app-pass-book',
  standalone: true,
  imports: [NgFor, HttpClientModule, MatCard, MatCardContent, MatCardTitle],
  templateUrl: './pass-book.component.html',
  styleUrl: './pass-book.component.scss',
  providers: [BorrowedBooksService]
})
export class PassBookComponent {

   private bBookArray: any =[];
   constructor(private bBook: BorrowedBooksService){}
   cards: GetLoanResponse[] = [];
   card: GetLoanResponse = new GetLoanResponse(1, 1);
   ngOnInit(): void {
     this.getBooks();
   }

   getBooks(): void {
     this.bBook.getLoan().subscribe(response => {
       console.log(response);
       //this.cards = response.resp;
       this.card = new GetLoanResponse(response.id, response.status);
       //this.card = response.resp;
     });
   }
}
