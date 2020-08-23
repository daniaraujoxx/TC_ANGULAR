import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from './login/shared/login.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from './login/shared/login.model';



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
        IdOperador: 0,
        NmOperador: '',
        NrCPF: '',
        NrMatricula: 0,
        DsCargo: '',
        CdFilial: 0,
        PwOperador: ''
    }
  }
  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router
  
   ) { }

  ngOnInit(): void {
    
  }
  logar() :void {
    if (this.formLogin.form.valid) {
      this.loginService.postLogin(this.request).subscribe();
      this.router.navigate(['/selecionarcliente']);
    }
  }
}
