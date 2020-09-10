import { Cupom } from './../consultaproduto/shared/cupom.model';
import { RelatoriocupomService } from './../consultaproduto/shared/relatoriocupom.service';
import { RelatorioCupom } from './../consultaproduto/shared/relatoriocupom.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from '../relatoriocliente/shared/cliente.model';

declare var $: any;


@Component({
  selector: 'app-ofertacupom',
  templateUrl: './ofertacupom.component.html',
  styleUrls: ['./ofertacupom.component.css']
})
export class OfertacupomComponent implements OnInit {
  cliente: Cliente;
  dados: string = "";
  cupom: Cupom = {
    idCupom: null,
    dtInicial: null,
    dtFinal: null,
    cliente: null,
    itensCupom: [],
  }
  relatorioCupom: RelatorioCupom={
    status: 0,
    mensagem: '',
    retorno: this.cupom,
    };

    btnEnviar = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private relatorioCupomService: RelatoriocupomService) { }

  ngOnInit(): void {
    this.cliente = JSON.parse(localStorage['cliente']);
    this.relatorioCupomService.getCliente(this.cliente).subscribe(response =>{
      this.relatorioCupom = response;
      console.log(this.relatorioCupom);
    });

  }

  enviarEmail(){
   this.btnEnviar = true;
    this.relatorioCupomService.getEnviarEmail(this.cliente).subscribe(response => {
      this.btnEnviar = false;
      $('#exampleModal').modal('show');
    });


  }



  }



