import {Injectable} from '@angular/core';
import {UserLogin} from "./user";
import {JwtToken} from "./jwtToken";
import {HttpClient} from "@angular/common/http";
import {BASE_API_URL} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  private postNoAuth(packet: any, endpoint: string) {
    return this.http.post<JwtToken>(BASE_API_URL + endpoint, packet);
  }

  submitApplication(email: string, password: string) {
    console.log(`Homes application received: email: ${email}, password: ${password}.`);
    this.postNoAuth(new UserLogin(email, password), 'auth/authentication')
      .subscribe({
      next: (token) => {
        console.log(`Token received: ${token.token}`);
      },
      error: (error) => {
        // выводит код ошибки, тут обычно 403 если неправильный логин или пароль
        console.log(`Error: ${error.status}`);
      }
    });
  }
}
