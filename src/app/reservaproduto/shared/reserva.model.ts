import { Produto } from './../../consultaproduto/shared/produto.model';
import { ResponseAPI } from './../../responseAPI/responseAPI.model';
import { itensReserva } from './itensReserva.model';
import { Cliente } from './../../relatoriocliente/shared/cliente.model';

export interface Reserva{
  cliente: Cliente;
  dtInicial: string;
  dtFinal: string;
  idReserva: number;
  itensReserva: Array<itensReserva>;
}

export interface ReservaAdd{
  cliente: Cliente;
  cdProduto: number;
  nmFantasia: string;
  qtproduto: number;
}

export interface ReservaResponse extends ResponseAPI<Reserva>{
    status: number;
    mensagem: string;
    retorno: Reserva;
}

//GET Login
export interface ResponseReserva {
    login: ReservaResponse;
}
