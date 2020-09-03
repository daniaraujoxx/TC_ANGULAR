import { ResponseAPI } from './../../responseAPI/responseAPI.model';
import { Cliente } from './../../relatoriocliente/shared/cliente.model';

export interface CadastroResponse extends ResponseAPI<Cliente>{
  status: number;
  mensagem: string;
  retorno: Cliente;
}

//Post cadastro
export interface ResponseCadastro {
  cadastro: CadastroResponse;
}
