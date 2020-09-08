import { Operacao } from "./operacao.model";
import { Filial } from "./filial.model";
import { Cliente } from "../../relatoriocliente/shared/cliente.model";
import { ItemNF } from "./itemNF.model";
import { TipoPagamento } from "./tipoPagamento.model";



export interface NF{

    idDocumentoFiscal: number;
    operacao: Operacao;
    filial: Filial;
    cliente: Cliente;
    motivo: number;
    idDocumentoFiscalVenda: number;
    nrItem: number;
    dataAbertura: string;
    dataFechamento: string;
    flagNota: number;
    valorDocumento: number;
    numeroCaixa: number;
    itens: Array<ItemNF>;
    tipoPagamento: TipoPagamento;
    notaDevolvida: number
}