import { Cliente } from './shared/cliente.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RelatorioclienteService } from './shared/relatoriocliente.service';
import { ClienteResponse } from './shared/relatoriocliente.model';

@Component({
  selector: 'app-relatoriocliente',
  templateUrl: './relatoriocliente.component.html',
  styleUrls: ['./relatoriocliente.component.css']
})
export class RelatorioclienteComponent implements OnInit {
  dados: string ="";
  clienteResponse: ClienteResponse;



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
}
