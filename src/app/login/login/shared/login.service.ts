import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Login, ResponseLogin } from './login.model';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('tc:1234')
    })
  };

  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:8080/login';

  postLogin(request: Login) {
    return this.http.post<ResponseLogin>(this.API, request.retorno, this.httpOptions);
  }

}
