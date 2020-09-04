import { Endereco } from './../../relatoriocliente/shared/endereço.model';
import { ResponseAPI } from './../../responseAPI/responseAPI.model';

export interface CepResponse extends ResponseAPI<Endereco> {
    status: number;
    mensagem: string;
    retorno: Endereco;
}




