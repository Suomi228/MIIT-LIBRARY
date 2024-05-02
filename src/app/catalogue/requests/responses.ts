import { GetBookResponse } from "./getBookRequest";

export class GetLoanResponse{
  constructor(public id:number, public status:number, public book:GetBookResponse, public loanDate: Date){}
}
export class GetAllLoansResponse{
  constructor(public loans: GetLoanResponse[]){}
}


