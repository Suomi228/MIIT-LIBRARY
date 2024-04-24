import { NgFor } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { BorrowedBooksService } from '../services/borrowed-books.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateLoanResponse } from '../catalogue/requests/createLoanRequest';
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {GetLoanResponse} from "../catalogue/responses";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-pass-book',
  standalone: true,
  imports: [NgFor, HttpClientModule, MatCard, MatCardContent, MatCardTitle, MatCardModule, MatDatepickerModule],
  templateUrl: './pass-book.component.html',
  styleUrl: './pass-book.component.scss',
  providers: [BorrowedBooksService,provideNativeDateAdapter()]
})
export class PassBookComponent {
  
   private bBookArray: any =[];
   constructor(private bBook: BorrowedBooksService){}
   cards: GetLoanResponse[] = [];
   card: GetLoanResponse = new GetLoanResponse(1, 1);
   selected: Date | null | undefined;
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
