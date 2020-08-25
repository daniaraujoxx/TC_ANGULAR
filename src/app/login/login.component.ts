import { Operador } from './login/shared/operador.model';
import { Observable, interval } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from './login/shared/login.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginResponse } from './login/shared/login.model';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  @ViewChild('formLogin', {static: true}) formLogin: NgForm;

  operador: Operador = {
        idOperador: 0,
        nmOperador: '',
        nrCPF: '',
        nrMatricula: 157977,
        dsCargo: '',
        cdFilial: 0,
        pwOperador: '1234'
  }

  loginResponse: LoginResponse;

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router

   ) { }

  ngOnInit(): void {

  }
  logar(): void {
    if (this.formLogin.form.valid) {
      this.loginService.postLogin(this.operador).subscribe(request =>{
        this.loginResponse = request;
        console.log(this.loginResponse);
        localStorage['operador'] = JSON.stringify(this.loginResponse.retorno);
        this.router.navigate(['/selecionarcliente']);
      });
    }
  }
}
