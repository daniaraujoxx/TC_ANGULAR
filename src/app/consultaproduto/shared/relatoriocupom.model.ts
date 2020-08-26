import { ResponseAPI } from './../../responseAPI/responseAPI.model';
import { Cupom } from './cupom.model';
export interface RelatorioCupom  extends ResponseAPI<Cupom> {
  status: number;
  mensagem: string;
  retorno: Cupom;
}
