import { CategoriaProduto } from "./categoriaProduto.model";
import { LmpmItem } from "./lmpmLista.model";

export interface Produto {
    cdProduto: number;
    idStatusProduto: number;
    categoria: CategoriaProduto;
    idTipoProduto: number;
    nmFantasia: string;
    nmFabricante: string;
    vlUnidade: number;
    dsProduto: string;
    lmpmItem: LmpmItem;


}
