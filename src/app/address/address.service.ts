import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AddressService {
  url = environment.apiUrl; // api rest fake

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  getDocuments(address:string): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/clients?address=${address}`)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}