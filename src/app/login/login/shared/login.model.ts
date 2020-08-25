import { Operador } from './operador.model';
import { ResponseAPI } from '../../../responseAPI/responseAPI.model';

export interface LoginResponse extends ResponseAPI<Operador>{
    status: number;
    mensagem: string;
    retorno: Operador;
}

//GET Login
export interface ResponseLogin {
    login: LoginResponse;
}
