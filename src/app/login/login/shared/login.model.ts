export interface Login {
    status: number;
    mensagem: string;
    retorno: {
        IdOperador: number,
        NmOperador: string,
        NrCPF: string,
        NrMatricula: number,
        DsCargo: string,
        CdFilial: number,
        PwOperador: string
    }
    
}

//GET Login
export interface ResponseLogin {
    login: Login;
}