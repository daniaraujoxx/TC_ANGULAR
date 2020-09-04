import { Cliente } from './../relatoriocliente/shared/cliente.model';
import { ItensReserva } from './../reservaproduto/shared/itensReserva.model';
import { Produto } from './../consultaproduto/shared/produto.model';
import { RelatorioReservaService } from './../reservaproduto/shared/relatorioreserva.service';
import { Reserva } from './../reservaproduto/shared/reserva.model';
import { ConsultaprodutoService } from './../consultaproduto/shared/consultaproduto.service';
import { EstoqueResponse } from './../consultaproduto/shared/estoqueResponse.model';
import { Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-cadastro-reserva',
  templateUrl: './cadastro-reserva.component.html',
  styleUrls: ['./cadastro-reserva.component.css']
})
export class CadastroReservaComponent implements OnInit {
  mensagem: string = "";
  Itemselect:ItensReserva;

  @ViewChild('inputProduto') cdPrdutoElement: ElementRef;
  @ViewChild('inputQuantidade') qtdPrdutoElement: ElementRef;
  @ViewChild('btnAdicionar') btnAdicionar: ElementRef;

  //Retorno de COnsulta de Estoque
  estoqueNull: EstoqueResponse = {
    status: null,
    mensagem: null,
    retorno: [
      {
      cdEstoque: null,
      filial: {
        cdFilial: null,
        nmFilial: null,
        nrCnpj: null,
        nrTelefoneFilial: null,
      },
      produto: {
        cdProduto: null,
        statusProduto: null,
        categoria: null,
        idTipoProduto: null,
        nmFantasia: null,
        nmFabricante: null,
        vlUnidade: null,
        dsProduto: null,
        lmpmItem: null,
        subCategoria: null,
      },
      qtBase: null,
      qtEmpenho: null,
      qtEstoque:null
    }

    ]
  }

  estoqueResponse: EstoqueResponse = this.estoqueNull;

  qtdDisponivelReserva: number = null;

  newReserva: Reserva={
    cliente: null,
    dtInicial: null,
    dtFinal: null,
    idReserva: null,
    itensReserva: []
  }


  constructor(
    private consultaProdutoService: ConsultaprodutoService,
    private route: ActivatedRoute,
    private router: Router,
    private relatorioReservaService: RelatorioReservaService
  ) { }

  ngOnInit(): void {
  }

  verificaEstoque(){
    if(this.cdPrdutoElement.nativeElement.value > 0){
    this.consultaProdutoService.getBuscarProdutoCodigo(this.cdPrdutoElement.nativeElement.value).subscribe(response =>{
      if(response.retorno.length > 0){
        this.estoqueResponse = response;
        this.qtdDisponivelReserva = this.estoqueResponse.retorno[0].qtEstoque - this.estoqueResponse.retorno[0].qtEmpenho;
        this.qtdPrdutoElement.nativeElement.disabled = false;
        this.qtdPrdutoElement.nativeElement.focus();
      }else{
        this.estoqueResponse = this.estoqueNull;
        this.qtdDisponivelReserva = null;
        $('#MixEstoque').modal('show');
      }

      console.log(this.estoqueResponse);
    });
  }
  }

  verificaQuantidade(){
    if(this.qtdPrdutoElement.nativeElement.value > this.qtdDisponivelReserva || this.qtdPrdutoElement.nativeElement.value < 1){
      $('#QtdReservaInvalid').modal('show');
    }else{
      this.btnAdicionar.nativeElement.disabled = false;
      this.btnAdicionar.nativeElement.focus();
    }
  }

  adicionar(){
    console.log(this.newReserva.itensReserva);
    let encontrado: boolean = true;
    if(this.newReserva.itensReserva.length > 0){
      this.newReserva.itensReserva.forEach(item => {
        console.log(item.produto);
        if(this.estoqueResponse.retorno[0].produto.cdProduto == item.produto.cdProduto){
          encontrado = false;
        }
      });
    }
    if(encontrado){
      this.newReserva.itensReserva.push({
        produto: this.estoqueResponse.retorno[0].produto,
        qtProduto: this.qtdPrdutoElement.nativeElement.value
      });
      this.cdPrdutoElement.nativeElement.value = "";
      this.qtdPrdutoElement.nativeElement.value = null;
      this.estoqueResponse = this.estoqueNull;
      this.qtdDisponivelReserva = null;
      this.qtdPrdutoElement.nativeElement.disabled = true;
      this.cdPrdutoElement.nativeElement.focus();
      this.btnAdicionar.nativeElement.disabled = true;
    }else{
      this.mensagem ="Este codigo de produto ja foi adicionado a reserva!";
      this.mensagemShow();
    }
  }

  remover(){
    console.log(this.Itemselect);
    this.newReserva.itensReserva.splice(this.newReserva.itensReserva.indexOf(this.Itemselect), 1);
    $('#exampleModal').modal('hide');
  }

  confirmar(){
    let cliente: Cliente = JSON.parse(localStorage['cliente']);
    let date = new Date();
    console.log(date);
    this.newReserva.cliente = cliente;
    this.newReserva.dtInicial = date;
  }

  closeMixEstoqueModal(){
    $('#MixEstoque').modal('hide');
    this.cdPrdutoElement.nativeElement.focus();
    this.cdPrdutoElement.nativeElement.value = null;

  }

  closeQtdReservaInvalidModal(){
    $('#QtdReservaInvalid').modal('hide');
    this.qtdPrdutoElement.nativeElement.focus();
    this.qtdPrdutoElement.nativeElement.value = null;
  }

  mensagemShow(){
    $('#MensagemModal').modal('show');
  }

  mensagemClose(){
    $('#MensagemModal').modal('hide');
    this.mensagem=null;
  }

}
