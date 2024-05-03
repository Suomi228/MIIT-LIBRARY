import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { BorrowedBooksService } from '../services/borrowed-books.service';
import { HttpClientModule } from '@angular/common/http';
import {MatCard} from "@angular/material/card";
import {GetAllLoansResponse} from "../catalogue/requests/responses";

@Component({
  selector: 'app-pass-book',
  standalone: true,
  imports: [NgFor, HttpClientModule, MatCard],
  templateUrl: './pass-book.component.html',
  styleUrl: './pass-book.component.scss',
  providers: [BorrowedBooksService]
})
export class PassBookComponent {

   constructor(private bBook: BorrowedBooksService){}
   cards: GetAllLoansResponse = new GetAllLoansResponse([]);
   ngOnInit(): void {
     this.getBooks();
   }

   getBooks(): void {
     this.bBook.getLoan().subscribe(response => {
       console.log(response);
       this.cards = response;
       response.loans.forEach(loan => {
         loan.loanDate = new Date(loan.loanDate);
       });
       console.log(this.cards);
       console.log(typeof this.cards.loans[0].loanDate);
     });
   }
}
