import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NfResponse } from "./shared/nfResponse.model";
import { DevolucaoService } from "./shared/devolucao.service";
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-devolucao',
  templateUrl: './devolucao.component.html',
  styleUrls: ['./devolucao.component.css']
})
export class DevolucaoComponent implements OnInit {

  @ViewChild('inputNf') nrNfElement: ElementRef;

  nfResponse: NfResponse;


  constructor(private devolucaoService: DevolucaoService) { }


  ngOnInit(): void {
  }

  consultarNF() {
    let dados: string = this.nrNfElement.nativeElement.value;

    this.devolucaoService.getNotaFiscal(dados).subscribe(response => {
      this.nfResponse = response;
      console.log(this.nfResponse);
    })

  }
}
