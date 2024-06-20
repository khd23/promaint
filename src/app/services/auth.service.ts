import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
const AUTH_API = 'http://localhost:8087/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })

};
const grantType = "password"
const withRefreshToken = true

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

    login(user: any) {

   //return  axios.post(AUTH_API + 'token', user, { headers: { 'Content-Type': 'application/json' } })
   return this.http.post(
    AUTH_API + 'token',
    user,
    { headers: { 'Content-Type': 'application/json' } }
  );

  }

  register(username: string, email: string, password: string): Observable<any> {

    return this.http.post(
      AUTH_API + 'signup',
      {
        username,
        email,
        password,
      },
      httpOptions
    );
  }



  logout() {
    // localStorage.removeItem(this.tokenKey);
    // this.router.navigate(['/login']);
    // return  axios.post(AUTH_API + 'signout', { headers: { 'Content-Type': 'application/json' } })
   // return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }
}
