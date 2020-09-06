import { ItensReservaId } from './itensReserva.model';
import { ResponseAPI } from './../../responseAPI/responseAPI.model';

export interface ResponseItemReserva extends ResponseAPI<ItensReservaId> {
  status: number;
  mensagem: string;
  retorno: ItensReservaId;
}
