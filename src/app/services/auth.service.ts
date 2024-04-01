import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  submitApplication(email: string, password: string | number) {
    console.log(`Homes application received: email: ${email}, password: ${password}.`);
  }
}
