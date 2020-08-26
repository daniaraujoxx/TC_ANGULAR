import { Cupom } from './../consultaproduto/shared/cupom.model';
import { RelatoriocupomService } from './../consultaproduto/shared/relatoriocupom.service';
import { RelatorioCupom } from './../consultaproduto/shared/relatoriocupom.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ofertacupom',
  templateUrl: './ofertacupom.component.html',
  styleUrls: ['./ofertacupom.component.css']
})
export class OfertacupomComponent implements OnInit {
  dados: string = "";
  relatorioCupom: RelatorioCupom={
    status: 0,
    mensagem: '',
    retorno: null
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
