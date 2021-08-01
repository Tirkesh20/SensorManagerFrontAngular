import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from 'rxjs';
import {HttpClient,HttpHeaders,} from "@angular/common/http";
import {Router} from "@angular/router";
import {LoginComponent} from "../login/login.component";

const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'application/json','Access-Control-Allow-Origin': '*'})
}

@Injectable({
  providedIn: 'root'
})


export class AuthService {


  private AUTH_API=environment.apiBaseUrl;
  constructor(private http: HttpClient,
              private router:Router) {

  }



  login(credentials: { username: any; password: any; }):Observable<any> {
    return this.http.post(this.AUTH_API + '/api/auth/signin', {
      username: credentials.username,
      password: credentials.password
    },httpOptions );
  }






}
