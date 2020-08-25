export interface Retorno {
  idCliente: number,
  nmCliente: string,
  dsEmail: string,
  dtCadastro: string,
  nrCPF: string,
  nrRg: string,
  dtNascimento: string,
  dsGenero: string,
  nrTelefoneCliente: string,
  categoriaClienteDTO: {
  idCategoriaCliente: number,
  dsCategoriaCliente: string,
  pcDescontoCliente: number
  }
}

export interface Cliente {
    status: number;
    mensagem: string;
    retorno: Retorno;

}


    export interface ResponseClientes {
        clientes: Cliente;
    }


