import {Injectable} from '@angular/core';
import {UserLogin} from "./user";
import {JwtToken} from "./jwtToken";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BASE_API_URL} from "../constants";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {
  }

  private postNoAuth(packet: any, endpoint: string) {
    return this.http.post<JwtToken>(BASE_API_URL + endpoint, packet);
  }

  public getAuthenticated(packet: any, endpoint: string) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get(BASE_API_URL + endpoint, {headers: headers});
  }
  public postAuthenticated(packet: any, endpoint: string) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.post(BASE_API_URL + endpoint, packet, {headers: headers});
  }

  submitApplication(email: string, password: string) {
    console.log(`Homes application received: email: ${email}, password: ${password}.`);
    this.postNoAuth(new UserLogin(email, password), 'auth/authentication')
      .subscribe({
        next: (token) => {
          console.log(`Token received: ${token.token}  ${token.role}`);
          localStorage.setItem('token', token.token);
          this.router.navigate(['/home']);
        },
        error: (error) => {
          // выводит код ошибки, тут обычно 403 если неправильный логин или пароль
          console.log(`Error: ${error.status}`);
        }
      });
  }
}
