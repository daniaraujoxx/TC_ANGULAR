import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RelatorioclienteService } from './shared/relatoriocliente.service';
import { ClienteResponse } from './shared/relatoriocliente.model';
import {Cliente} from './shared/cliente.model';

@Component({
  selector: 'app-relatoriocliente',
  templateUrl: './relatoriocliente.component.html',
  styleUrls: ['./relatoriocliente.component.css']
})
export class RelatorioclienteComponent implements OnInit {
  dados: string ="";
  clienteResponse: ClienteResponse={
    status: 0,
    mensagem: '',
    retorno: []
    };




  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private relatorioClienteService: RelatorioclienteService
     ) { }


  ngOnInit(): void {
    this.dados = this.route.snapshot.paramMap.get('dados');
    this.relatorioClienteService.getCliente(this.dados).subscribe(response =>{
      this.clienteResponse = response;
    });
  }

  selecionar(idCliente: number){
    console.log(idCliente);
    this.clienteResponse.retorno.forEach(cliente => {
      if (cliente.idCliente == idCliente){
        console.log("ID localizado com sucesso");
      }
    });
  }
}
