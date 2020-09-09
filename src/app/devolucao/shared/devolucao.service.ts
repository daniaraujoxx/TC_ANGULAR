import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NfResponse } from './nfResponse.model';
import { NF } from './nf.model';


@Injectable({
  providedIn: 'root'
})
export class DevolucaoService {
  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('tc:magnifico')
    })
  };



  constructor(private http: HttpClient) { }
  private readonly API = 'http://localhost:8080/nf/';

  getNotaFiscal(dados: string): Observable<NfResponse>{
    return this.http.get<NfResponse>(this.API + dados, this.httpOptions);

  }

  postNotaFiscal(nf: NF): Observable<NfResponse>{
    return this.http.post<NfResponse>(this.API + 'devolucao', nf, this.httpOptions);

  }
}
