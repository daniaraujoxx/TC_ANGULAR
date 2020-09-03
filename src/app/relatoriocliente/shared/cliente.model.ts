import { Endereco } from './endereço.model';
import { CategoriaCliente } from './categoriaCliente.model';

export interface Cliente{
  idCliente: number,
  nmCliente: string,
  dsEmail: string,
  dtCadastro: string,
  nrCPF: string,
  nrRg: string,
  dtNascimento: string,
  dsGenero: string,
  nrTelefoneCliente: string,
  categoriaClienteDTO: CategoriaCliente,
  enderecos: Array<Endereco>;
}
