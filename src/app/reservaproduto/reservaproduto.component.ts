import { Produto } from './../consultaproduto/shared/produto.model';
import { itensReserva } from './shared/itensReserva.model';
import { RelatorioReservaService } from './shared/relatorioreserva.service';
import { RelatorioReserva } from './shared/relatorioreserva.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Reserva, ReservaResponse, ReservaAdd } from './shared/reserva.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reservaproduto',
  templateUrl: './reservaproduto.component.html',
  styleUrls: ['./reservaproduto.component.css']
})
export class ReservaprodutoComponent implements OnInit {

  @ViewChild('formAdd', {static: true}) formAdd: NgForm;

  reserva: Reserva = {
    cliente: JSON.parse(localStorage['cliente']),
    dtInicial: "",
    dtFinal: "",
    idReserva: null,
    itensReserva: Array<itensReserva>()
    }

    produtoitem: Produto = {
      cdProduto: 0,
      idStatusProduto: 0,
      categoria: null,
      idTipoProduto: 0,
      nmFantasia: '',
      nmFabricante: '',
      vlUnidade: 0,
      lmpmItem: null,

    }


  itemreserva: itensReserva = {
    produto: this.produtoitem,
    qtproduto: 0
  }
  reservaResponse: ReservaResponse;

  dados: string = "";
  RelatorioReserva: RelatorioReserva={
    status: 0,
    mensagem: '',
    retorno: null
    };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private relatorioReservaService: RelatorioReservaService) { }

  ngOnInit(): void {
    this.dados = this.route.snapshot.paramMap.get('dados');
    this.relatorioReservaService.getCliente(this.dados).subscribe(response =>{
      this.RelatorioReserva = response;
      console.log(this.RelatorioReserva);
    });
  }
  Add(): void {
    if (this.formAdd.form.valid) {
      this.relatorioReservaService.postReserva(this.reserva).subscribe(request =>{
        this.reservaResponse = request;
        confirm("Reserva inserida com Sucesso!");
        console.log(this.reservaResponse);
      });
    }
  }

}
