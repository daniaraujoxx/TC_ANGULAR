import { StatusProduto } from './statusProduto.model';
import { SubCategoria } from './subCategoria.model';
import { CategoriaProduto } from "./categoriaProduto.model";
import { LmpmItem } from "./lmpmLista.model";

export interface Produto {
    cdProduto: number;
    statusProduto: StatusProduto;
    categoria: CategoriaProduto;
    idTipoProduto: number;
    nmFantasia: string;
    nmFabricante: string;
    vlUnidade: number;
    dsProduto: string;
    lmpmItem: LmpmItem;
    subCategoria: SubCategoria;


}
