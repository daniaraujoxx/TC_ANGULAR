import { Reserva } from './reserva.model';
import { Produto } from './../../consultaproduto/shared/produto.model';

export interface ItensReserva{
  produto: Produto;
  qtProduto: number;
}

export interface ItensReservaId{
  reserva: Reserva;
  produto: Produto;
  qtProduto: number;
}
