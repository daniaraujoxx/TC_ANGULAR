import { ItensReserva } from './itensReserva.model';
import { Cliente } from './../../relatoriocliente/shared/cliente.model';

export interface Reserva{
  cliente: Cliente;
  dtInicial: Date;
  dtFinal: Date;
  idReserva: number;
  itensReserva: Array<ItensReserva>;
}
