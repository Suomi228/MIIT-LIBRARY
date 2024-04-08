import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatCardContent, MatCardModule, MatCardTitle} from "@angular/material/card";
import {MatCheckbox, MatCheckboxModule} from "@angular/material/checkbox";
import {NgForOf} from "@angular/common";
import {GetBookResponse} from "../catalogue/requests/getBookRequest";
import {BookService} from "../services/book.service";
import {HttpClientModule} from "@angular/common/http";

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
    HttpClientModule
  ],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.scss',
  providers: [BookService]
})
export class CatalogueComponent {
  constructor(private router: Router, private bookService: BookService) {
  }

  cards: GetBookResponse[] = [];

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe(response => {
      console.log(response);
      this.cards = response.books;
    });
  }

  checkboxes = ['Checkbox 1', 'Checkbox 2', 'Checkbox 3', 'Checkbox 4', 'Checkbox 5'];
}
