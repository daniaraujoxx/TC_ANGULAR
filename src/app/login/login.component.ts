import { Operador } from './login/shared/operador.model';
import { Observable, interval } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from './login/shared/login.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginResponse } from './login/shared/login.model';

declare var $: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  @ViewChild('formSenha', {static: true}) formSenha: NgForm;
  data = {
    password: '',
    password_confirm: '',
  };
  @ViewChild('formLogin', {static: true}) formLogin: NgForm;
  operador: Operador = {
        idOperador: 0,
        nmOperador: '',
        nrCpf: '',
        nrMatricula: null,
        dsCargo: '',
        cdFilial: 0,
        pwOperador: ''
  }

  alterarResponse: LoginResponse;

  mensagemError: string;
  error: boolean = false;

  mensagemSucesso: string;
  success: boolean = false;

  loginResponse: LoginResponse;

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router

   ) { }

  ngOnInit(): void {

  }

  abreModal(){

    $('#senhaModal').modal('show');

  }
  logar(): void {
    if (this.formLogin.form.valid) {
      this.loginService.postLogin(this.operador).subscribe(request =>{
        this.loginResponse = request;
        console.log(this.loginResponse);
        localStorage['operador'] = JSON.stringify(this.loginResponse.retorno);
        this.router.navigate(['/selecionarcliente']);
      },
      error => {
        this.handleError(error);
      }
      );
    }
  }
  handleError(error: Response) {
    if (error.status == 401) {
      this.mensagemError = "Matricula ou Senha Incorretas!";
      this.error =  true;
    }
  }
  alterarSenha(){
    console.log(this.operador);
    this.loginService.putLogin(this.operador).subscribe(
      response => {
      this.alterarResponse = response;
        this.mensagemSucesso =  `Senha alterada com sucesso!`;
        this.success =  true;
        this.error =  false;
      },
      error=>{
        this.mensagemError =  `Erro ao alterar senha! ${ error.error.mensagem }`;
        this.error =  true;
        this.success =  false;
      }
    );
  }
}
