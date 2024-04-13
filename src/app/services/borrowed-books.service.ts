import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetBookResponse } from '../catalogue/requests/getBookRequest';
import {BASE_API_URL} from "../constants";
import { CreateLoanResponse } from '../catalogue/requests/createLoanRequest';
@Injectable({
  providedIn: 'root'
})
export class BorrowedBooksService {

  constructor(private http: HttpClient) { }

  cards: CreateLoanResponse[] = [];

  addBook(){
    let loan=new CreateLoanResponse(1);
    console.log(loan.bookId);
    this.createLoan(loan).subscribe({
      next: (token) => {
        console.log("tts");
      },
      error: (error) => {
        // выводит код ошибки, тут обычно 403 если неправильный логин или пароль
        console.log(`Error: ${error.status}`);
      }
    });;
  }
  createLoan(createLoanResponse: CreateLoanResponse): Observable<{ books: GetBookResponse[] }> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    console.log("created loan")
    return this.http.post<{ books: GetBookResponse[] }>(BASE_API_URL + "loan/create",createLoanResponse, {headers: headers});
  }
  getLoan(): Observable<{ loan: CreateLoanResponse[] }> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get<{ loan: CreateLoanResponse[] }>(BASE_API_URL + "loan/get{id}", {headers: headers});
  }
}
