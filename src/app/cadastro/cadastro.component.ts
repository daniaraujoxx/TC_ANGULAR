import { CategoriaCliente } from './../relatoriocliente/shared/categoriaCliente.model';
import { CadastroService } from './shared/cadastro.service';
import { Endereco } from './../relatoriocliente/shared/endereço.model';
import { Cliente } from './../relatoriocliente/shared/cliente.model';
import { NgForm } from '@angular/forms';
import { Observable, interval } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CadastroResponse } from './shared/cadastro.model';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

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
  constructor(
    private cadastroService: CadastroService,
    private route: ActivatedRoute,
    private router: Router
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
     var today = dt.getDate();

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
}
