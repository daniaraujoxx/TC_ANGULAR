import { ResponseAPI } from "../../responseAPI/responseAPI.model";
import { NF } from "./nf.model";

export interface NfResponse extends ResponseAPI<NF> {
    status: number;
    mensagem: string;
    retorno: NF;

}