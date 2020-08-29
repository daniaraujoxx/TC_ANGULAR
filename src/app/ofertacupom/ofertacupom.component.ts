import { Cupom } from './../consultaproduto/shared/cupom.model';
import { RelatoriocupomService } from './../consultaproduto/shared/relatoriocupom.service';
import { RelatorioCupom } from './../consultaproduto/shared/relatoriocupom.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from '../relatoriocliente/shared/cliente.model';

@Component({
  selector: 'app-ofertacupom',
  templateUrl: './ofertacupom.component.html',
  styleUrls: ['./ofertacupom.component.css']
})
export class OfertacupomComponent implements OnInit {
  cliente: Cliente = JSON.parse(localStorage["cliente"]);
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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private relatorioCupomService: RelatoriocupomService) { }

  ngOnInit(): void {
    this.dados = this.route.snapshot.paramMap.get('dados');
    this.relatorioCupomService.getCliente(this.dados).subscribe(response =>{
      this.relatorioCupom = response;
      console.log(this.relatorioCupom);
    });
  }

}
