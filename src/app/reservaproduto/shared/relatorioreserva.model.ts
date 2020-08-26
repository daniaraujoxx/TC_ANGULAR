import { ResponseAPI } from './../../responseAPI/responseAPI.model';
import { Reserva } from './reserva.model';
export interface RelatorioReserva  extends ResponseAPI<Reserva> {
  status: number;
  mensagem: string;
  retorno: Reserva;
}
