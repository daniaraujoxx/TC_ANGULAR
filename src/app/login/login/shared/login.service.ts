import { Operador } from './operador.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { LoginResponse, ResponseLogin } from './login.model';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('tc:magnifico')
    })
  };

  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:8080/login';

  postLogin(operador: Operador): Observable<LoginResponse>{
    return this.http.post<LoginResponse>(this.API, operador, this.httpOptions);
  }

}
