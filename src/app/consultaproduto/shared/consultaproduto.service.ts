import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { EstoqueResponse } from './estoqueResponse.model';
import { Observable } from 'rxjs';
import { Operador } from 'src/app/login/login/shared/operador.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultaprodutoService {

  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('tc:magnifico')
    })
  };

  constructor(private http: HttpClient) { }
  url: string;
  operador:  Operador = JSON.parse(localStorage['operador']);

  private readonly API = 'http://localhost:8080/filial';
  
  getBuscarProdutoCodigo(codigo: number): Observable<EstoqueResponse>{
    this.url = `/${this.operador.cdFilial}/codigo/${codigo}`;
    return this.http.get<EstoqueResponse>(this.API + this.url, this.httpOptions);
  }

  getBuscarProdutoNome(produto: string): Observable<EstoqueResponse>{
    this.url = `/${this.operador.cdFilial}/nome/${produto}`;
    return this.http.get<EstoqueResponse>(this.API + this.url, this.httpOptions);
  }
  getBuscarProdutos(): Observable<EstoqueResponse>{
    this.url = `/${this.operador.cdFilial}`;
    return this.http.get<EstoqueResponse>(this.API + this.url, this.httpOptions);
  }
}