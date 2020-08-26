import { Component, OnInit } from '@angular/core';
import { EstoqueResponse } from './shared/estoqueResponse.model';
import { Estoque } from './shared/estoque.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ConsultaprodutoService } from './shared/consultaproduto.service';

@Component({
  selector: 'app-consultaproduto',
  templateUrl: './consultaproduto.component.html',
  styleUrls: ['./consultaproduto.component.css']
})
export class ConsultaprodutoComponent implements OnInit {

  estoqueResponse: EstoqueResponse = {
    status: null,
    mensagem: null,
    retorno: []
  }

  dados: string;
  estoque: EstoqueResponse = {
    status: null,
    mensagem: null,
    retorno: []

  }
  

  constructor( 
    private consultaProdutoService: ConsultaprodutoService,
    private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {
    this.dados = this.route.snapshot.paramMap.get('produto');
    console.log(this.dados);
    this.consultaProdutoService.getBuscarProdutoNome(this.dados);
    
  }


}
