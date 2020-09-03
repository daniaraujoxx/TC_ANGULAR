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
  mensagem: string = "";

  @ViewChild('inputProduto') cdPrdutoElement: ElementRef;
  @ViewChild('inputQuantidade') qtdPrdutoElement: ElementRef;
  @ViewChild('btnAdicionar') btnAdicionar: ElementRef;

  estoqueNull: EstoqueResponse = {
    status: null,
    mensagem: null,
    retorno: [
      {
      cdEstoque: null,
      filial: {
        cdFilial: 1,
        nmFilial: "BUTANTA",
        nrCnpj: "61585865000151",
        nrTelefoneFilial: "11998773940",
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
      qtBase: 5,
      qtEmpenho: 0,
      qtEstoque:0
    }

    ]
  }

  estoqueResponse: EstoqueResponse = this.estoqueNull;

  qtdDisponivelReserva: number = null;

  RelatorioReserva: RelatorioReserva={
    status: 0,
    mensagem: '',
    retorno: null
    };

    produtoItemAdd: Produto={
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
    };

  itemAdd: ItensReserva ={
    produto: this.produtoItemAdd,
    qtProduto: null,
  }



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
    private relatorioReservaService: RelatorioReservaService) { }

  ngOnInit(): void {
    this.dados = this.route.snapshot.paramMap.get('dados');
    this.relatorioReservaService.getCliente(this.dados).subscribe(response =>{
      this.RelatorioReserva = response;
      console.log(this.RelatorioReserva);
    });
    //console.log(this.itensAdd.length);
  }



  verificaEstoque(){
    this.consultaProdutoService.getBuscarProdutoCodigo(this.itemAdd.produto.cdProduto.toString()).subscribe(response =>{
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

  verificaQuantidade(){
    if(this.itemAdd.qtProduto>this.qtdDisponivelReserva || this.itemAdd.qtProduto < 1){
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
        if(this.cdPrdutoElement.nativeElement.value == item.produto){
          encontrado = false;
        }
      });
    }
    if(encontrado){
      this.newReserva.itensReserva.push({
        produto: this.cdPrdutoElement.nativeElement.value,
        qtProduto: this.qtdPrdutoElement.nativeElement.value
      });
      this.itemAdd.produto.cdProduto=null;
      this.itemAdd.qtProduto=null;
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

  closeMixEstoqueModal(){
    $('#MixEstoque').modal('hide');
    this.cdPrdutoElement.nativeElement.focus();
    this.itemAdd.produto.cdProduto = null;

  }

  closeQtdReservaInvalidModal(){
    $('#QtdReservaInvalid').modal('hide');
    this.qtdPrdutoElement.nativeElement.focus();
    this.itemAdd.qtProduto = null;
  }

  mensagemShow(){
    $('#MensagemModal').modal('show');
  }

  mensagemClose(){
    $('#MensagemModal').modal('hide');
    this.mensagem=null;
  }

}
