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
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  formularioDeUsuario: FormGroup;

  @ViewChild('formCadastro', {static: true}) formCadastro: NgForm;

  categoriaCliente: CategoriaCliente ={
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
  nrCPF: null,
  nrRg: null,
  dtNascimento: null,
  dsGenero: null,
  nrTelefoneCliente: null,
  categoriaClienteDTO: this.categoriaCliente,
  enderecos: [],
}

cadastroResponse: CadastroResponse;
validcpf: boolean;
  constructor(
    private cadastroService: CadastroService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private fb: FormBuilder,
    public datepipe: DatePipe
  ) { }

  ngOnInit(): void {
  }
  cadastrar(): void {
    if (this.formCadastro.form.valid) {
      this.cliente.enderecos.push(this.endereco);
      this.cadastroService.postCadastro(this.cliente).subscribe(request =>{
        this.cadastroResponse = request;
        console.log(this.cadastroResponse);
        this.router.navigate(['/selecionarcliente']);
      },
      );
    }
  }
  calculaIdade(): void{
    var birthdate =  this.cliente.dtNascimento;
    let newDate = new Date(birthdate);
     var dt = new Date();
     console.log(dt);
     let date = new Date();
     var today = this.datepipe.transform(date, 'yyyy-MM-dd');
     this.cliente.dtCadastro = today.toString();
     console.log(today);

    let timeDiff = Math.abs(Date.now() - newDate.getTime());
    let age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
    console.log(age);

    if (age <= 60){
      this.categoriaCliente.idCategoriaCliente = 1;
    }else{
      this.categoriaCliente.idCategoriaCliente = 2;
    }
    console.log(this.cliente);

  }
  ValidaCpf(){
      let cpf  = this.cliente.nrCPF;
      console.log(cpf);
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
        console.log(false);

          return false;
      }
      else {
        console.log(true);
          return true;
      }
  }

  }
