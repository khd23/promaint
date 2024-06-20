import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  clean(): void {
    window.sessionStorage.clear();
  }
  public saveTokens(data: any): void {
    // window.sessionStorage.removeItem('ACCESS_TOKEN');
    // window.sessionStorage.removeItem('REFRESH_TOKEN');
    window.sessionStorage.setItem('ACCESS_TOKEN', data.accessToken);
    window.sessionStorage.setItem('REFRESH_TOKEN',data.refreshToken)
  }
  public saveUser(user: any): void {
    window.sessionStorage.setItem('USER', JSON.stringify(user));
    window.sessionStorage.setItem('ROLES',JSON.stringify(user.roles))
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem('USER');
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
  public getRoles(): any {
    const user = window.sessionStorage.getItem('USER');

    if (user) {
      let connectedUser= JSON.parse(user);
      console.log("user service",connectedUser)
      console.log("role service",connectedUser.roles)
      return  connectedUser.roles;
    }


    return {};
  }


  public isLoggedIn(): boolean {
    const token = window.sessionStorage.getItem('ACCESS_TOKEN');
    return token != null && token[0].length > 0;
  }

  public getAccessToken(): string | null {
    return this.isLoggedIn() ?  window.sessionStorage.getItem('ACCESS_TOKEN'): null;
  }
}
