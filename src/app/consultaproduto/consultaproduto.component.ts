import { Component, OnInit } from '@angular/core';
import { EstoqueResponse } from './shared/estoqueResponse.model';
import { Estoque } from './shared/estoque.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ConsultaprodutoService } from './shared/consultaproduto.service';
import { Cliente } from '../relatoriocliente/shared/cliente.model';

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
  cliente: Cliente = JSON.parse(localStorage['cliente']);
  
  

  constructor( 
    private consultaProdutoService: ConsultaprodutoService,
    private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {
    this.dados = this.route.snapshot.paramMap.get('produto');
    console.log(this.dados);
    if(this.dados == ""){
      this.consultaProdutoService.getBuscarProdutos().subscribe(response => {
        this.estoqueResponse = response;
        console.log(this.estoqueResponse);
        
      })
    }
    if(Number(this.dados)){
      this.consultaProdutoService.getBuscarProdutoCodigo(this.dados).subscribe(response =>{
        this.estoqueResponse = response;
        console.log(this.estoqueResponse);
      });
    } else {
    
    this.consultaProdutoService.getBuscarProdutoNome(this.dados).subscribe(response =>{
      this.estoqueResponse = response;
      console.log(this.estoqueResponse);
    });
  }
    
  }


}
