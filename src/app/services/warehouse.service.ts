import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {environment} from "../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  private apiURL = environment.domain + "api/v1/warehouses";

  /*------------------------------------------
  --------------------------------------------
  Http Header Options
  --------------------------------------------
  --------------------------------------------*/
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    responseType: 'text' as 'text'

  }

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(private httpClient: HttpClient) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  getAll(): Observable<any> {

    return this.httpClient.get(this.apiURL)

      .pipe(
        catchError(this.errorHandler)
      )
  }


  /**
   * Write code on Method
   *
   * @return response()
   */
  create(warehouse:any): Observable<any> {

    return this.httpClient.post(this.apiURL , JSON.stringify(warehouse), this.httpOptions)

      .pipe(
        catchError(this.errorHandler)
      )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  find(id:number): Observable<any> {

    return this.httpClient.get(this.apiURL + '/' + id)

      .pipe(
        catchError(this.errorHandler)
      )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  update(id:number, warehouse:any): Observable<any> {

    return this.httpClient.put(this.apiURL + '/' + id, JSON.stringify(warehouse), this.httpOptions)

      .pipe(
        catchError(this.errorHandler)
      )
  }

  changePassword(admin:any): Observable<any> {

    return this.httpClient.post(this.apiURL +'/pwd', JSON.stringify(admin), this.httpOptions)

      .pipe(
        catchError(this.errorHandler)
      )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/' + id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })

      .pipe(
        catchError(this.errorHandler)
      )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  errorHandler(error:any) {
    if (error instanceof HttpErrorResponse) {
      if (error.status === 403) {
        console.error('Forbidden error:', error);
        return throwError(error.error);
      } else {
        return throwError('An unexpected error occurred.');
      }
    } else if (typeof error === 'string') {
      // Handle the case where the error is a string (e.g., a non-JSON response)
      return throwError(error);
    } else {
      // Handle other types of errors as needed
      return throwError('An unexpected error occurred.');
    }

  }
}
