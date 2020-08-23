export interface Login {
    status: number;
    mensagem: string;
    retorno: {
        idOperador: number,
        nmOperador: string,
        nrCPF: string,
        nrMatricula: number,
        dsCargo: string,
        cdFilial: number,
        pwOperador: string
    }

}

//GET Login
export interface ResponseLogin {
    login: Login;
}
