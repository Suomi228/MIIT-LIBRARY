import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetBookResponse } from '../catalogue/requests/getBookRequest';
import {BASE_API_URL} from "../constants";
import { CreateLoanResponse } from '../catalogue/requests/createLoanRequest';
import { GetAllLoansResponse, GetLoanResponse } from '../catalogue/requests/responses';
import { InfoResponse } from './responses/infoResponse';
@Injectable({
  providedIn: 'root'
})
export class BorrowedBooksService {

  constructor(private http: HttpClient) { }

 cards: CreateLoanResponse[] = [];

  addBook(loan: CreateLoanResponse){
    // let loan=new CreateLoanResponse(1);
    console.log(loan.bookId);
    this.createLoan(loan).subscribe({
      next: () => {
        console.log("success message from addBook");
      },
      error: (error) => {
        // выводит код ошибки, тут обычно 403 если неправильный логин или пароль
        console.log(`Error: ${error.status}`);
      }
    });
  }
  createLoan(createLoanResponse: CreateLoanResponse){
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    console.log("created loan")
    return this.http.post<InfoResponse>(BASE_API_URL + "loan/create",createLoanResponse, {headers: headers});
  }
  getLoan() {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get<GetAllLoansResponse>(BASE_API_URL + "loan/get", {headers: headers});
  }
}
