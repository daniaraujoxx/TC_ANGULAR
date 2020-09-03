import { CadastroResponse } from './cadastro.model';
import { Cliente } from './../../relatoriocliente/shared/cliente.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('tc:magnifico')
    })
  };

  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:8080/cliente';

  postCadastro(cliente: Cliente): Observable<CadastroResponse>{
    return this.http.post<CadastroResponse>(this.API, cliente, this.httpOptions);
  }

}
