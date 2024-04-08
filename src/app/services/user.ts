export class UserRegistration{
  constructor(public login:string, public password:string, public name:string, public surname:string){}
}

export class UserLogin{
  constructor(public login:string, public password:string){}
}
