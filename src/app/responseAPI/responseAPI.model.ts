export interface ResponseAPI<T>{
  status: number;
  mensagem: string;
  retorno: T;
}

export interface ResponseAPIArray<T>{
  status: number;
  mensagem: string;
  retorno: Array<T>;
}
