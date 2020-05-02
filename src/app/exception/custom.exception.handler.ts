import { ErrorHandler, Injectable} from '@angular/core';

@Injectable()
export class CustomExceptionHandler implements ErrorHandler{

    constructor() {

     }
     handleError(error:any){

        console.error('An error occurred:', error.message);
        console.error(error.error.message);
        alert(error.error.message);
    }
}


