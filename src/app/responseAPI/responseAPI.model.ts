export interface ResponseAPI<T>{
  status: number;
  mensagem: string;
  retorno: T;
}
