import { Cliente } from './../../relatoriocliente/shared/cliente.model';
import { RelatorioCupom } from './relatoriocupom.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'

})
export class RelatoriocupomService {
  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('tc:magnifico')
    })
  };


  cliente: Cliente = JSON.parse(localStorage['cliente']);

  constructor(private http: HttpClient) { }
  private readonly API = 'http://localhost:8080/cupom/';

  getCliente(dados: string): Observable<RelatorioCupom>{
    return this.http.get<RelatorioCupom>(this.API + this.cliente.idCliente, this.httpOptions);
  }

  getEnviarEmail(): Observable<any>{
    return this.http.get<RelatorioCupom>(this.API + "enviar/" + this.cliente.idCliente, this.httpOptions);
    
  }
}
