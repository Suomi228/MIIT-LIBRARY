import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BorrowedBooksService {

  constructor() { }
  bBooks: string [] = [];
  
  addBook(book: string){
    this.bBooks.push(book);
  }
}
