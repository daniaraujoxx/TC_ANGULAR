import { Produto } from "./produto.model";

export interface itensCupom{
  idCupomItem: number;
  pcDesconto: number;
  produto: Produto;
}
