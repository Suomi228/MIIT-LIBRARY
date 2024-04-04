import {Injectable} from '@angular/core';
import {UserLogin} from "./user";
import {JwtToken} from "./jwtToken";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {   }

  login(user: UserLogin) {
    return this.http.post<JwtToken>('http://localhost:8080/api/v1/auth/authentication', user);
  }

  submitApplication(email: string, password: string) {
    console.log(`Homes application received: email: ${email}, password: ${password}.`);
    this.login(new UserLogin(email, password)).subscribe({
      next: (token) => {
        console.log(`Token received: ${token.token}`);
      },
      error: (error) => {
        console.log(`Error: ${error}`);
      }
    });
    }
  }
