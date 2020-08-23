import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login, ResponseLogin } from './login.model';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:8080/login';

  postLogin(request: Login) {
    return this.http.post<ResponseLogin>(this.API, request.retorno);
  }

}
