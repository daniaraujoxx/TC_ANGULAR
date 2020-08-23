import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from './login/shared/login.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Login, ResponseLogin } from './login/shared/login.model';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  @ViewChild('formLogin', {static: true}) formLogin: NgForm;

  request: Login = {
    status: 0,
    mensagem: '',
    retorno: {
        idOperador: 0,
        nmOperador: '',
        nrCPF: '',
        nrMatricula: 11111111,
        dsCargo: '',
        cdFilial: 0,
        pwOperador: '1111'
    }
  }

  responseLogin: ResponseLogin;

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router

   ) { }

  ngOnInit(): void {

  }
  logar() :void {
    if (this.formLogin.form.valid) {
      console.log(this.request);
      this.loginService.postLogin(this.request).subscribe(request => this.responseLogin = request);
      console.log(this.responseLogin);
      //this.router.navigate(['/selecionarcliente']);
    }
  }
}
