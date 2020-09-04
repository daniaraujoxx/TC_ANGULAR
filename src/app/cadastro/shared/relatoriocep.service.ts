import { CepResponse } from './relatoriocep.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'

})
export class RelatoriocepService {
  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('tc:magnifico')
    })
  };



  constructor(private http: HttpClient) { }
  private readonly API = 'viacep.com.br/ws/dados/json/';

  getCep(dados: string): Observable<CepResponse>{
    return this.http.get<CepResponse>(this.API + dados, this.httpOptions);
  }
}
