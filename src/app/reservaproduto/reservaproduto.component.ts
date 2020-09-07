import { ResponseItemReserva } from './shared/resposeItemReserva.model';
import { ItemReservaServiceService } from './shared/item-reserva-service.service';
import { Reserva } from './shared/reserva.model';
import { Produto } from './../consultaproduto/shared/produto.model';
import { ConsultaprodutoService } from './../consultaproduto/shared/consultaproduto.service';
import { EstoqueResponse } from './../consultaproduto/shared/estoqueResponse.model';
import { ItensReserva, ItensReservaId } from './shared/itensReserva.model';
import { RelatorioReservaService } from './shared/relatorioreserva.service';
import { RelatorioReserva } from './shared/relatorioreserva.model';
import { Component, ElementRef, ViewChild, OnInit, ɵConsole, ɵ_sanitizeHtml } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

declare var $: any;

@Component({
  selector: 'app-reservaproduto',
  templateUrl: './reservaproduto.component.html',
  styleUrls: ['./reservaproduto.component.css']
})
export class ReservaprodutoComponent implements OnInit {
  dados: string = "";
  qtdInvalidEdit = false;
  editError = false;
  editSuccess = false;

  @ViewChild('inputProduto') cdPrdutoElement: ElementRef;
  @ViewChild('inputQuantidade') qtdPrdutoElement: ElementRef;
  @ViewChild('btnAlterar') btnAlterar: ElementRef;

  item: ItensReservaId ={
    reserva: null,
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
    qtProduto: null,
    stSeparado: null,
  };

  RelatorioReserva: RelatorioReserva = {
    status: 0,
    mensagem: '',
    retorno: null
    };

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

    resonseItemReserva: ResponseItemReserva;

    estoqueResponse: EstoqueResponse = this.estoqueNull;

    qtdDisponivelReserva: number = null;

  constructor(
    private consultaProdutoService: ConsultaprodutoService,
    private route: ActivatedRoute,
    private router: Router,
    public datepipe: DatePipe,
    private relatorioReservaService: RelatorioReservaService,
    private itemReservaServide: ItemReservaServiceService) { }

  ngOnInit(): void {

    this.relatorioReservaService.getCliente().subscribe(response =>{
      this.RelatorioReserva = response;
      console.log(this.RelatorioReserva);
    });
    //console.log(this.itensAdd.length);
  }

  selectItemDelete(reserva: Reserva, itemReserva: ItensReserva): void{
    this.item.reserva  = reserva;
    this.item.produto =  itemReserva.produto;
    $('#deleteModal').modal('show');
  }

  delete(): void{
    this.itemReservaServide.deleteItemReserva(this.item.reserva.idTcReserva, this.item.produto.cdProduto).subscribe(response =>{
      this.resonseItemReserva = response;
      this.itemReset();
      window.location.reload();
    });
    this.verificaEstoque();
    $('#deleteModal').modal('hide');


  }

  selectItemEdit(reserva: Reserva, itemReserva: ItensReserva): void{
    this.item.reserva  = reserva;
    this.item.produto =  itemReserva.produto;
    this.item.qtProduto = itemReserva.qtProduto;
    this.item.stSeparado = itemReserva.stSeparado;
    this.editError = false;
    this.editSuccess = false;
    $('#editModal').modal('show');
    setTimeout( () => { this.verificaEstoque(); }, 100 );

  }

  verificaEstoque(): void{
    this.consultaProdutoService.getBuscarProdutoCodigo(this.cdPrdutoElement.nativeElement.value).subscribe(response => {
        this.estoqueResponse = response;
        this.qtdDisponivelReserva = this.estoqueResponse.retorno[0].qtEstoque - this.estoqueResponse.retorno[0].qtEmpenho;
        this.qtdPrdutoElement.nativeElement.disabled = false;
        this.qtdPrdutoElement.nativeElement.focus();
         console.log(this.estoqueResponse);
    });
  }

  verificaQuantidade(): void{
    if (this.qtdPrdutoElement.nativeElement.value > this.qtdDisponivelReserva || this.qtdPrdutoElement.nativeElement.value < 1){
      this.qtdInvalidEdit = true;
    }else{
      this.qtdInvalidEdit = false;
      this.btnAlterar.nativeElement.disabled = false;
      this.btnAlterar.nativeElement.focus();
    }
  }

  editar(): void{
    this.itemReservaServide.putItemReserva(this.item).subscribe(response => {
      this.resonseItemReserva = response;
      this.editError = false;
      this.editSuccess = true;
      setTimeout( () => { window.location.reload(); }, 5000 );
    },
    error => {
      this.editError = true;
      this.editSuccess = false;
    }
    );
  }

  itemReset(): void{
    this.item.reserva = null;
    this.item.produto = null;
    this.item.qtProduto = null;
  }

  atualizaSeparado(reserva: Reserva, itemReserva: ItensReserva): void{
    this.item.produto = itemReserva.produto;
    this.item.qtProduto = itemReserva.qtProduto;
    this.item.stSeparado = itemReserva.stSeparado;
    this.item.reserva = reserva;


    this.itemReservaServide.putItemReserva(this.item).subscribe(response => {});
  }

  generatePdf(reserva: Reserva): void{
    let cabecalho: string;
    if (reserva.nrPedido > 0|| reserva.nrPedido != null){
      cabecalho = `Reserva: ${reserva.idTcReserva}     Pedido: ${reserva.nrPedido}`;
    }else{
      cabecalho = `Reserva: ${reserva.idTcReserva}`;
    }
    const documentDefinition = { content: [
        { canvas: [ { type: 'line', x1: 0, y1: 0, x2: 250, y2: 0, lineWidth: 1 } ]},
        { text: cabecalho, fontSize: 15 },
        { text: 'Data Separação: ' + this.datepipe.transform(reserva.dtInicialReserva, 'dd/MM/yyyy'), fontSize: 10 },
        { text: 'Vencimento: ' + this.datepipe.transform(reserva.dtInicialReserva, 'dd/MM/yyyy'), fontSize: 10 },
        { text: 'Cliente: ' + reserva.clienteDTO.nmCliente, fontSize: 10 },
        {canvas: [ { type: 'line', x1: 0, y1: 0, x2: 250, y2: 0, lineWidth: 1 } ]},

    ]};
    pdfMake.createPdf(documentDefinition).open();
  }






}
