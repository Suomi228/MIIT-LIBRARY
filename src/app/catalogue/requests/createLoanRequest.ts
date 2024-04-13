export class CreateLoanResponse {
    constructor (public bookId: number){}
    getId(){
        return this.bookId;
    }
}
// export interface CreateLoanResponse{
//     bookId: number;
// }

