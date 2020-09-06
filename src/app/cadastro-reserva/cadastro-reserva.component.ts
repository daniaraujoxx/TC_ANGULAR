import { RelatorioReserva } from './../reservaproduto/shared/relatorioreserva.model';
import { Cliente } from './../relatoriocliente/shared/cliente.model';
import { ItensReserva } from './../reservaproduto/shared/itensReserva.model';
import { RelatorioReservaService } from './../reservaproduto/shared/relatorioreserva.service';
import { Reserva } from './../reservaproduto/shared/reserva.model';
import { ConsultaprodutoService } from './../consultaproduto/shared/consultaproduto.service';
import { EstoqueResponse } from './../consultaproduto/shared/estoqueResponse.model';
import { Component, ElementRef, ViewChild, OnInit, AfterViewInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


declare var $: any;

@Component({
  selector: 'app-cadastro-reserva',
  templateUrl: './cadastro-reserva.component.html',
  styleUrls: ['./cadastro-reserva.component.css']
})
export class CadastroReservaComponent implements OnInit, AfterViewInit {
  mensagem: string;
  Itemselect: ItensReserva;
  error: boolean;
  success: boolean;
  mensagemError: string;
  mensagemSuccess: string;

  @ViewChild('inputProduto') cdPrdutoElement: ElementRef;
  @ViewChild('inputQuantidade') qtdPrdutoElement: ElementRef;
  @ViewChild('btnAdicionar') btnAdicionar: ElementRef;
  @ViewChild('btnConfirmar') btnConfirmar: ElementRef;

  // Retorno de COnsulta de Estoque
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
      qtEstoque: null
    }

    ]
  };

  estoqueResponse: EstoqueResponse = this.estoqueNull;

  qtdDisponivelReserva: number = null;

  newReserva: Reserva = {
    clienteDTO: null,
    dtInicialReserva: null,
    dtFinalReserva: null,
    idTcReserva: null,
    itens: []
  };

  reservaCadastrada: RelatorioReserva;

  constructor(
    private consultaProdutoService: ConsultaprodutoService,
    private route: ActivatedRoute,
    private router: Router,
    public datepipe: DatePipe,
    private relatorioReservaService: RelatorioReservaService
  ) { }

  ngAfterViewInit(): void{
    const cdProduto = this.route.snapshot.paramMap.get('cdProduto');
    if (cdProduto != null || cdProduto != ''){
      this.cdPrdutoElement.nativeElement.value = cdProduto;
      this.verificaEstoque();
    }
  }

  ngOnInit(): void {
  }

  verificaEstoque(): void{
    if (this.cdPrdutoElement.nativeElement.value > 0){
    this.consultaProdutoService.getBuscarProdutoCodigo(this.cdPrdutoElement.nativeElement.value).subscribe(response => {
      if (response.retorno.length > 0){
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

  verificaQuantidade(): void{
    if (this.qtdPrdutoElement.nativeElement.value > this.qtdDisponivelReserva || this.qtdPrdutoElement.nativeElement.value < 1){
      $('#QtdReservaInvalid').modal('show');
    }else{
      this.btnAdicionar.nativeElement.disabled = false;
      this.btnAdicionar.nativeElement.focus();
    }
  }

  adicionar(): void{
    console.log(this.newReserva.itens);
    let encontrado = true;
    if (this.newReserva.itens.length > 0){
      this.newReserva.itens.forEach(item => {
        console.log(item.produto);
        if (this.estoqueResponse.retorno[0].produto.cdProduto == item.produto.cdProduto){
          encontrado = false;
        }
      });
    }
    if (encontrado){
      this.newReserva.itens.push({
        produto: this.estoqueResponse.retorno[0].produto,
        qtProduto: this.qtdPrdutoElement.nativeElement.value
      });
      this.formReset();
      this.btnConfirmar.nativeElement.disabled = false;
    }else{
      this.mensagem = 'Este codigo de produto ja foi adicionado a reserva!';
      this.mensagemShow();
      this.formReset();
    }
  }

  remover(): void{
    console.log(this.Itemselect);
    this.newReserva.itens.splice(this.newReserva.itens.indexOf(this.Itemselect), 1);
    if (this.newReserva.itens.length <= 0){
      this.btnConfirmar.nativeElement.disabled = true;
    }
    $('#exampleModal').modal('hide');

  }

  confirmar(): void{
    const cliente: Cliente = JSON.parse(localStorage['cliente']);

    const date = new Date();

    this.newReserva.clienteDTO = cliente;
    this.newReserva.dtInicialReserva = this.datepipe.transform(date, 'yyyy-MM-dd');

    const dateFinal = new Date();
    dateFinal.setDate(date.getDate() + 3);

    this.newReserva.dtFinalReserva = this.datepipe.transform(dateFinal, 'yyyy-MM-dd');
    console.log(this.newReserva);

    this.relatorioReservaService.putCadastroReserva(this.newReserva).subscribe(response => {
      this.reservaCadastrada = response;
      console.log(this.reservaCadastrada);
      this.newReserva.itens = [];
      this.formReset();
      this.error = false;
      this.mensagemSuccess = 'Reserva Cadastrada com sucesso!';
      this.success = true;
      setTimeout( () => { this.success = false; }, 5000 );
      this.generatePdf();
    },
    error => {
      this.mensagemError = 'Erro ao Cadastrar Reserva!';
      this.error =  true;
    }

    );

  }

  formReset(): void{
      this.cdPrdutoElement.nativeElement.value = null;
      this.qtdPrdutoElement.nativeElement.value = null;
      this.estoqueResponse = this.estoqueNull;
      this.qtdDisponivelReserva = null;
      this.qtdPrdutoElement.nativeElement.disabled = true;
      this.cdPrdutoElement.nativeElement.focus();
      this.btnAdicionar.nativeElement.disabled = true;
  }
  closeMixEstoqueModal(): void{
    $('#MixEstoque').modal('hide');
    this.cdPrdutoElement.nativeElement.focus();
    this.cdPrdutoElement.nativeElement.value = null;

  }

  closeQtdReservaInvalidModal(): void{
    $('#QtdReservaInvalid').modal('hide');
    this.qtdPrdutoElement.nativeElement.focus();
    this.qtdPrdutoElement.nativeElement.value = null;
  }

  mensagemShow(): void{
    $('#MensagemModal').modal('show');
  }

  mensagemClose(): void{
    $('#MensagemModal').modal('hide');
    this.mensagem = null;
  }

  generatePdf(): void{
    const documentDefinition = { content: [
        {canvas: [ { type: 'line', x1: 0, y1: 0, x2: 250, y2: 0, lineWidth: 1 } ]},
        { text: 'Reserva: ' + this.reservaCadastrada.retorno.idTcReserva, fontSize: 15 },
        { text: 'Data Separação: ' + this.datepipe.transform(this.reservaCadastrada.retorno.dtInicialReserva, 'dd/MM/yyyy'), fontSize: 10 },
        { text: 'Vencimento: ' + this.datepipe.transform(this.reservaCadastrada.retorno.dtFinalReserva, 'dd/MM/yyyy'), fontSize: 10 },
        { text: 'Cliente: ' + this.reservaCadastrada.retorno.clienteDTO.nmCliente, fontSize: 10 },
        {canvas: [ { type: 'line', x1: 0, y1: 0, x2: 250, y2: 0, lineWidth: 1 } ]},

    ]};
    pdfMake.createPdf(documentDefinition).open();
  }



}
