import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from './login/shared/login.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from './login/shared/login.model';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('formLogin', {static: true}) formLogin: NgForm;

  request: Login = { 
    status: number,
    mensagem: string,
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
  constructor() { }

  ngOnInit(): void {
  }

}
