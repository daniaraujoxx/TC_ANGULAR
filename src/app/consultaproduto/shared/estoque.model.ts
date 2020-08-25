import { Filial } from "./filial.model";
import { Produto } from "./produto.model";

export interface Estoque {
    cdEstoque: number;
    filial: Filial;
    produto: Produto;
    qtEstoque: number;
    qtEmpenho: number;
    qtBase: number;
}