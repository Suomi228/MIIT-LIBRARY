import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { BorrowedBooksService } from '../services/borrowed-books.service';

@Component({
  selector: 'app-pass-book',
  standalone: true,
  imports: [NgFor],
  templateUrl: './pass-book.component.html',
  styleUrl: './pass-book.component.scss'
})
export class PassBookComponent {

    constructor(public bBooks: BorrowedBooksService){}
}
