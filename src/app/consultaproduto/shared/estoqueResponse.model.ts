import { Estoque } from "./estoque.model";
import { ResponseAPIArray } from "../../responseAPI/responseAPI.model";

export interface EstoqueResponse extends ResponseAPIArray<Estoque>{
    status: number;
    mensagem: string;
    retorno: Array<Estoque>
  }