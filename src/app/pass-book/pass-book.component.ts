import { NgFor } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { BorrowedBooksService } from '../services/borrowed-books.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateLoanResponse } from '../catalogue/requests/createLoanRequest';
@Component({
  selector: 'app-pass-book',
  standalone: true,
  imports: [NgFor,HttpClientModule],
  templateUrl: './pass-book.component.html',
  styleUrl: './pass-book.component.scss',
  providers: [BorrowedBooksService]
})
export class PassBookComponent {

   private bBookArray: any =[];
   constructor(@Inject(BorrowedBooksService) private bBook: BorrowedBooksService, private loan: CreateLoanResponse){}
   cards: CreateLoanResponse[] = [];

   ngOnInit(): void {
     this.getBooks();
   }
 
   getBooks(): void {
     this.bBook.getLoan().subscribe(response => {
       console.log(response);
       this.cards = response.loan;
      
     });
   }
}
