import { ItensReserva } from './itensReserva.model';
import { Cliente } from './../../relatoriocliente/shared/cliente.model';

export interface Reserva{
  idTcReserva: number;
  clienteDTO: Cliente;
  dtInicialReserva: string;
  dtFinalReserva: string;
  itens: Array<ItensReserva>;
}
