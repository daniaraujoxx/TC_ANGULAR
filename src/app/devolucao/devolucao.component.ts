import { Component, OnInit, ViewChild, ElementRef, TestabilityRegistry } from '@angular/core';
import { NfResponse } from "./shared/nfResponse.model";
import { DevolucaoService } from "./shared/devolucao.service";
import { stringify } from '@angular/compiler/src/util';
import { NF } from './shared/nf.model';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-devolucao',
  templateUrl: './devolucao.component.html',
  styleUrls: ['./devolucao.component.css']
})
export class DevolucaoComponent implements OnInit {

  @ViewChild('inputNf') nrNfElement: ElementRef;
  @ViewChild('dtCupom') dataCupom: ElementRef;


  nf: NF = {

    idDocumentoFiscal: null,
    operacao: null,
    filial: null,
    cliente: null,
    motivo: null,
    idDocumentoFiscalVenda: null,
    nrItem: null,
    dataAbertura: null,
    dataFechamento: null,
    flagNota: null,
    valorDocumento: null,
    numeroCaixa: null,
    itens: [],
    tipoPagamento: null,
    notaDevolvida: null

  };



  nfResponse: NfResponse = {
    status: null,
    mensagem: null,
    retorno: this.nf
  };


  tipoDevolucao = false;

  constructor(private devolucaoService: DevolucaoService, public datepipe: DatePipe) {


  }


  ngOnInit(): void {
  }

  consultarNF() {
    let dados: string = this.nrNfElement.nativeElement.value;

    this.devolucaoService.getNotaFiscal(dados).subscribe(response => {
      this.nfResponse = response;
      this.dataCupom.nativeElement.value = this.datepipe.transform(this.nfResponse.retorno.dataAbertura, 'yyyy-MM-dd');
      console.log(this.nfResponse);
    })


  }
  
}
