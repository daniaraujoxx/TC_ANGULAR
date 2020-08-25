export interface Cliente {
    status: number;
    mensagem: string;
    retorno: {
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
    }}


    }
    export interface ResponseClientes {
        clientes: Cliente;
    }

