// src/app/services/book.service.ts
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetBookResponse } from '../catalogue/requests/getBookRequest';
import {BASE_API_URL} from "../constants";
import {getBookAmountResponse} from "./responses/getBookAmountResponse";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBooks(page: number, size: number): Observable<{ books: GetBookResponse[] }> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get<{ books: GetBookResponse[] }>(BASE_API_URL + `book/getPage?page=${page}&size=${size}`, {headers: headers});
  }
  getBook(id: number): Observable<GetBookResponse> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get<GetBookResponse>(BASE_API_URL + "book/get/" + id, {headers: headers});
  }
  getBooksAmount(): Observable<getBookAmountResponse> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get<getBookAmountResponse>(BASE_API_URL + "book/getAmount", {headers: headers});
  }
}
