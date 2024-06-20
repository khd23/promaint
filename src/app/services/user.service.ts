import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {StorageService} from "./storage.service";
import {environment} from "../environments/environment";

const API_URL = environment.domain +  'api/v1/users';



@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient,private storageService: StorageService) {}


  getProfile() {
    return this.http.get(
      API_URL + '/profile',
      { headers: { 'Content-Type': 'application/json' } }
    );

  }

  forgotPassword(email:string): Observable<any> {
    return this.http.post(
      API_URL + '/forgot_password',
      {email: email},
      { headers: { 'Content-Type': 'application/json' } , responseType: 'text' as 'text' }
    );

  }

  resetPassword(token:string, newPassword: string): Observable<any> {
    return this.http.post(
      API_URL + '/resetPwd',
      {token: token, newPassword: newPassword},
      { headers: { 'Content-Type': 'application/json' } }
    );

  }
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}
