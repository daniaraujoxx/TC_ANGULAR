import { RelatoriocepService } from './shared/relatoriocep.service';
import { CepResponse } from './shared/relatoriocep.model';
import { DatePipe } from '@angular/common';
import { CategoriaCliente } from './../relatoriocliente/shared/categoriaCliente.model';
import { CadastroService } from './shared/cadastro.service';
import { Endereco } from './../relatoriocliente/shared/endereço.model';
import { Cliente } from './../relatoriocliente/shared/cliente.model';
import { NgForm, ReactiveFormsModule } from '@angular/forms';
import { Observable, interval } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CadastroResponse } from './shared/cadastro.model';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { stringify } from 'querystring';
import { errorMonitor } from 'events';
declare var $: any;

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  template: `
  <input [textMask]="{mask: mask}" [(ngModel)]="myModel" type="text"/>
`
})
export class CadastroComponent implements OnInit {
  public myModel = '';
  public mask = ['(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public mascaraCpf = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  public mascaraTelefone = ['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public mascaraTelefoneFixo = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public mascaraCep = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
  public mascaraRG = [ /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/];

  formularioDeUsuario: FormGroup;

  @ViewChild('formCadastro', { static: true }) formCadastro: NgForm;

  categoriaCliente: CategoriaCliente = {
    idCategoriaCliente: null,
    dsCategoriaCliente: '',
    pcDescontoCliente: 0,
  }

  endereco: Endereco = {
    cidade: null,
    dsBairro: null,
    dsEndereco: null,
    idEndereco: null,
    nrCep: null,
    nrEndereco: null,
    sgEstado: null,
  }

  cliente: Cliente = {
    idCliente: null,
    nmCliente: null,
    dsEmail: null,
    dtCadastro: null,
    nrCPF: '',
    nrRg: null,
    dtNascimento: null,
    dsGenero: null,
    nrTelefoneCliente: null,
    categoriaClienteDTO: this.categoriaCliente,
    enderecos: [],
  }

  cepresponse: CepResponse;
  mensagemError: string;
  error = false;

  cadastroResponse: CadastroResponse;
  validcpf: boolean;
  constructor(
    private cadastroService: CadastroService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private fb: FormBuilder,
    public datepipe: DatePipe,
    private cepservice: RelatoriocepService
  ) { }

  ngOnInit(): void {
  }
  cadastrar(): void {
    if (this.formCadastro.form.valid) {
      let clientegrav: Cliente = this.cliente;
      clientegrav.enderecos.push(this.endereco);
      clientegrav.nrCPF = clientegrav.nrCPF.replace(/[^a-z0-9\s]/gi, '');
      clientegrav.nrRg = clientegrav.nrRg.replace(/[^a-z0-9\s]/gi, '');
      clientegrav.nrTelefoneCliente = this.cliente.nrTelefoneCliente.replace(/[^a-z0-9\s]/gi, '');
      this.cadastroService.postCadastro(clientegrav).subscribe(request => {
        this.cadastroResponse = request;
        console.log(this.cadastroResponse);
        this.router.navigate(['/selecionarcliente']);
      },
      error => {
        if (error.status == 400) {
          this.abreModal();
        }
      }
      );
    }
  }
  abreModal(){

    $('#cpfModal').modal('show');

  }
  calculaIdade(): void {
    var birthdate = this.cliente.dtNascimento;
    let newDate = new Date(birthdate);
    var dt = new Date();
    console.log(dt);
    let date = new Date();
    var today = this.datepipe.transform(date, 'yyyy-MM-dd');
    this.cliente.dtCadastro = today.toString();
    console.log(today);

    let timeDiff = Math.abs(Date.now() - newDate.getTime());
    let age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
    console.log(age);

    if (age <= 60) {
      this.categoriaCliente.idCategoriaCliente = 1;
    } else {
      this.categoriaCliente.idCategoriaCliente = 2;
    }
    console.log(this.cliente);

  }
  ValidaCpf() {
    let cpf = this.cliente.nrCPF;
    cpf = cpf.replace(/[^a-z0-9\s]/gi, '')
    if (cpf == null) {
      console.log("erro 1 cpf nulo");
      return false;
    }
    if (cpf.length != 11) {
      console.log("erro 2 numero de digitos errado")
      return false;
    }
    if ((cpf == '00000000000') || (cpf == '11111111111') || (cpf == '22222222222') || (cpf == '33333333333') || (cpf == '44444444444') || (cpf == '55555555555') || (cpf == '66666666666') || (cpf == '77777777777') || (cpf == '88888888888') || (cpf == '99999999999')) {
      console.log("erro 3 sequencial")
      return false;
    }
    let numero: number = 0;
    let caracter: string = '';
    let numeros: string = '0123456789';
    let j: number = 10;
    let somatorio: number = 0;
    let resto: number = 0;
    let digito1: number = 0;
    let digito2: number = 0;
    let cpfAux: string = '';
    cpfAux = cpf.substring(0, 9);
    for (let i: number = 0; i < 9; i++) {
      caracter = cpfAux.charAt(i);
      if (numeros.search(caracter) == -1) {
        return false;
      }
      numero = Number(caracter);
      somatorio = somatorio + (numero * j);
      j--;
    }
    resto = somatorio % 11;
    digito1 = 11 - resto;
    if (digito1 > 9) {
      digito1 = 0;
    }
    j = 11;
    somatorio = 0;
    cpfAux = cpfAux + digito1;
    for (let i: number = 0; i < 10; i++) {
      caracter = cpfAux.charAt(i);
      numero = Number(caracter);
      somatorio = somatorio + (numero * j);
      j--;
    }
    resto = somatorio % 11;
    digito2 = 11 - resto;
    if (digito2 > 9) {
      digito2 = 0;
    }
    cpfAux = cpfAux + digito2;
    if (cpf != cpfAux) {
      return false;
    }
    else {
      return true;
    }
  }
  localizacep() {
    this.cepservice.getCep(this.endereco.nrCep.replace(/[^a-z0-9\s]/gi, '')).subscribe(response => {
      this.cepresponse = response;
      console.log(this.cepresponse);
      this.endereco.cidade = this.cepresponse.localidade;
      this.endereco.dsBairro = this.cepresponse.bairro;
      this.endereco.sgEstado = this.cepresponse.uf;
      this.endereco.dsEndereco = this.cepresponse.logradouro;
    });
  }
  teste(){
    var stringa = this.cliente.nrTelefoneCliente;
    stringa = stringa.replace(/[^a-z0-9\s]/gi, '');
    console.log(stringa);
  }
}
