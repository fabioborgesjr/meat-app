import { Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';

export class ErrorHandler {
    static handleError(error: Response | any) {
        let errorMessage: string
        errorMessage = `Erro ${error.status} ao obter a URL ${error.url} - ${error.statusText}`
        if (error instanceof Response) {

        } else {
            errorMessage = error.toString()
        }

        console.log(errorMessage)
        return Observable.throw(errorMessage)
    }
}