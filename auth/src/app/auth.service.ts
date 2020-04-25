import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Users}from './users.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  public token: string;
  readonly rootUrl = 'http://localhost:3000';
  constructor(private http:HttpClient) { }

  registerUser(fullName, emailId, pass)
  {
    const body = {
      fname: fullName,
      email: emailId,
      password: pass
    }
    return this.http.post(this.rootUrl+'/users', body)
    //console.log(body);
  }

  loginUser(dataObj)
  {
    const body = dataObj;
    return this.http.post<{token: string}>(this.rootUrl+'/login', body)
    //console.log(body);
  }

}
