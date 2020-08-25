import { CategoriaProduto } from "./categoriaProduto.model";
import { LmpmLista } from "./lmpmLista.model";

export interface Produto { 
    cdProduto: number;
    idStatusProduto: number;
    categoria: CategoriaProduto;
    idTipoProduto: number;
    nmFantasia: string;
    nmFabricante: string;
    vlUnidade: number;
    lmpmLista: LmpmLista;
    
}
