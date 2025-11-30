import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private router:Router, private http:HttpClient, @Inject('APIREQRES') public Apiurl:string) 
  { }

  // Sign-in
  signIn(user: any) {
    return this.http
      .post<any>(this.Apiurl, user)
      .subscribe((res: any) => {      
        localStorage.setItem('access_token', res.access_token);
        this.router.navigate(['/element']);
      });
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  doLogout() {
    localStorage.removeItem('access_token');    
    //this.router.navigate(['/login']);  
  }  

  get apiUrl(){
    return this.Apiurl
  }
}
