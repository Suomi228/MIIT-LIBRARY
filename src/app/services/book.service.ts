// src/app/services/book.service.ts
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetBookResponse } from '../catalogue/requests/getBookRequest';
import {BASE_API_URL} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<{ books: GetBookResponse[] }> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get<{ books: GetBookResponse[] }>(BASE_API_URL + "book/get", {headers: headers});
  }
}
