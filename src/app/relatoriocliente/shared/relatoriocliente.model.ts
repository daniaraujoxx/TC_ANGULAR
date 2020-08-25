import { Cliente } from './cliente.model';
import { ResponseAPI } from './../../responseAPI/responseAPI.model';

export interface ClienteResponse extends ResponseAPI<Cliente> {
    status: number;
    mensagem: string;
    retorno: Cliente;
}




