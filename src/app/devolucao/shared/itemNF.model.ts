import { NF } from "./nf.model";
import { Produto } from "../../consultaproduto/shared/produto.model";


export interface ItemNF{
    documentoFiscal: NF;
    numItemDocumento: number;
    produto: Produto;
    qtItem: number;
    valorItem: number;
    porcentoIcms: number;
    valorIcms: number;
    qtDevolvida: number;
    qtDevAux: number;
    formaDevolucao: any;
    





}