import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from 'rxjs';
import {HttpClient,HttpHeaders} from "@angular/common/http";

const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  private AUTH_API=environment.apiBaseUrl;
  constructor(private http: HttpClient) {

  }

  login(credentials: { username: any; password: any; }):Observable<any> {
    return this.http.post(this.AUTH_API+'signin',{
      username:credentials.username,
      password:credentials.password
    },httpOptions)
  }



}
