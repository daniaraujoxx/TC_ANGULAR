import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import {Cliente } from './relatoriocliente.model';


@Injectable({
  providedIn: 'root'

})
export class RelatorioclienteService {
  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('tc:magnifico')
    })
  };



  constructor(private http: HttpClient) { }
  private readonly API = 'http://localhost:8080/cliente?dadosCliente=';

  getCliente(dados: string): Observable<Cliente>{
    return this.http.get<Cliente>(this.API + dados, this.httpOptions);
  }
}
