import { Operador } from './../../login/login/shared/operador.model';
import { Reserva } from './reserva.model';
import { RelatorioReserva } from './relatorioreserva.model';
import { Cliente } from './../../relatoriocliente/shared/cliente.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'

})
export class RelatorioReservaService {
  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('tc:magnifico')
    })
  };


  cliente: Cliente = JSON.parse(localStorage['cliente']);
  operador: Operador = JSON.parse(localStorage['operador']);

  constructor(private http: HttpClient) { }
  private readonly API = 'http://localhost:8080/reserva';

  getCliente(): Observable<RelatorioReserva>{
    return this.http.get<RelatorioReserva>(this.API + `/${this.operador.cdFilial}/${this.cliente.idCliente}` , this.httpOptions);
  }

  putCadastroReserva(reserva: Reserva): Observable<RelatorioReserva>{
    return this.http.post<RelatorioReserva>(this.API, reserva, this.httpOptions);
  }
}
