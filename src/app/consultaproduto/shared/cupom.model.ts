import { itensCupom } from './itensCupom.model';
import { Cliente } from './../../relatoriocliente/shared/cliente.model';

export interface Cupom{
  idCupom: number;
  dtInicial: Date;
  dtFinal: Date;
  cliente: Cliente;
  itensCupom: Array<itensCupom>;
}
