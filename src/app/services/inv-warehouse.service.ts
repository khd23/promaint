import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class  InvVendorService {
  private apiURL = environment.domain +  "api/v1/sp-vendors";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Response-Type': 'text'

    })
  }
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL).pipe(catchError(this.errorHandler)
    )
  }

    create(invVendor: any): Observable<any> {
      return this.httpClient.post(this.apiURL, invVendor, { responseType: 'text' })
        .pipe(
          catchError(this.errorHandler)
        )
    }


    find(id: number): Observable<any> {

      return this.httpClient.get(this.apiURL + '/' + id)

        .pipe(
          catchError(this.errorHandler)
        )
    }

  getAllByInventory(id: number): Observable<any> {

    return this.httpClient.get(this.apiURL + '/sp/' + id)

      .pipe(
        catchError(this.errorHandler)
      )
  }


    update(id: number, invVendor: any): Observable<any> {

      return this.httpClient.put(this.apiURL + '/' + id, invVendor, { responseType: 'text' })

        .pipe(
          catchError(this.errorHandler)
        )
    }


    delete(id: number) {
      return this.httpClient.delete(this.apiURL + '/' + id, this.httpOptions)

        .pipe(
          catchError(this.errorHandler)
        )
    }


    errorHandler(error: any) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        errorMessage = error.error.message;
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      return throwError(errorMessage);
    }
}
