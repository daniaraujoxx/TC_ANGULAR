import { Reserva } from './shared/reserva.model';
import { Produto } from './../consultaproduto/shared/produto.model';
import { ConsultaprodutoService } from './../consultaproduto/shared/consultaproduto.service';
import { EstoqueResponse } from './../consultaproduto/shared/estoqueResponse.model';
import { ItensReserva } from './shared/itensReserva.model';
import { RelatorioReservaService } from './shared/relatorioreserva.service';
import { RelatorioReserva } from './shared/relatorioreserva.model';
import { Component, ElementRef, ViewChild, OnInit, ɵConsole, ɵ_sanitizeHtml } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


declare var $: any;

@Component({
  selector: 'app-reservaproduto',
  templateUrl: './reservaproduto.component.html',
  styleUrls: ['./reservaproduto.component.css']
})
export class ReservaprodutoComponent implements OnInit {
  dados: string = "";

  RelatorioReserva: RelatorioReserva={
    status: 0,
    mensagem: '',
    retorno: null
    };

  constructor(
    private consultaProdutoService: ConsultaprodutoService,
    private route: ActivatedRoute,
    private router: Router,
    private relatorioReservaService: RelatorioReservaService) { }

  ngOnInit(): void {
    this.dados = this.route.snapshot.paramMap.get('dados');
    this.relatorioReservaService.getCliente(this.dados).subscribe(response =>{
      this.RelatorioReserva = response;
      console.log(this.RelatorioReserva);
    });
    //console.log(this.itensAdd.length);
  }






}
