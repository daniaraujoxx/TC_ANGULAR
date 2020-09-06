import { ResponseItemReserva } from './resposeItemReserva.model';
import { ItensReserva } from './itensReserva.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemReservaServiceService {
  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('tc:magnifico')
    })
  };

  private readonly API = 'http://localhost:8080/reservaitem';

  constructor(private http: HttpClient) { }

  putItemReserva(reservaItem: ItensReserva): Observable<ResponseItemReserva>{
    return this.http.post<ResponseItemReserva>(this.API, reservaItem, this.httpOptions);
  }

  deleteItemReserva(idTcReserva: number, cdProduto: number): Observable<ResponseItemReserva>{

    return this.http.delete<ResponseItemReserva>(this.API + `/${idTcReserva}/${cdProduto}`, this.httpOptions);
  }
}
