import { Cliente } from './cliente.model';
import { ResponseAPIArray } from './../../responseAPI/responseAPI.model';

export interface ClienteResponse extends ResponseAPIArray<Cliente> {
    status: number;
    mensagem: string;
    retorno: Array<Cliente>;
}




