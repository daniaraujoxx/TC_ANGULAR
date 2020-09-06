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

  itemDelete: ItensReservaId ={
    reserva: null,
    produto: null,
    qtProduto: null
  };

  RelatorioReserva: RelatorioReserva = {
    status: 0,
    mensagem: '',
    retorno: null
    };

    resonseItemReserva: ResponseItemReserva;

  constructor(
    private consultaProdutoService: ConsultaprodutoService,
    private route: ActivatedRoute,
    private router: Router,
    public datepipe: DatePipe,
    private relatorioReservaService: RelatorioReservaService,
    private itemReservaServide: ItemReservaServiceService) { }

  ngOnInit(): void {
    this.dados = this.route.snapshot.paramMap.get('dados');
    this.relatorioReservaService.getCliente(this.dados).subscribe(response =>{
      this.RelatorioReserva = response;
      console.log(this.RelatorioReserva);
    });
    //console.log(this.itensAdd.length);
  }

  selectItemDelete(idTcReserva: number, cdProduto: number): void{
    this.itemDelete.reserva.idTcReserva = idTcReserva;
    this.itemDelete.produto.cdProduto = cdProduto;
    $('#deleteModal').modal('show');
  }

  delete(): void{
    this.itemReservaServide.deleteItemReserva(this.itemDelete.reserva.idTcReserva, this.itemDelete.produto.cdProduto).subscribe(response =>{
      this.resonseItemReserva = response;
      window.location.reload();
    });
    $('#deleteModal').modal('hide');


  }

  generatePdf(reserva: Reserva): void{
    const documentDefinition = { content: [
        {canvas: [ { type: 'line', x1: 0, y1: 0, x2: 250, y2: 0, lineWidth: 1 } ]},
        { text: 'Reserva: ' + reserva.idTcReserva, fontSize: 15 },
        { text: 'Data Separação: ' + this.datepipe.transform(reserva.dtInicialReserva, 'dd/MM/yyyy'), fontSize: 10 },
        { text: 'Vencimento: ' + this.datepipe.transform(reserva.dtInicialReserva, 'dd/MM/yyyy'), fontSize: 10 },
        { text: 'Cliente: ' + reserva.clienteDTO.nmCliente, fontSize: 10 },
        {canvas: [ { type: 'line', x1: 0, y1: 0, x2: 250, y2: 0, lineWidth: 1 } ]},

    ]};
    pdfMake.createPdf(documentDefinition).open();
  }






}
