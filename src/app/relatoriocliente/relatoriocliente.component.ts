import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RelatorioclienteService } from './shared/relatoriocliente.service';
import { ClienteResponse } from './shared/relatoriocliente.model';


declare var $: any;

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

      console.log(response)
      //  this.router.navigate(['/selecionarcliente']);

    },
    error => {
      $('#exampleModal').modal('show');
    }
    );
  }

  selecionar(idCliente: number){
    console.log(idCliente);
    this.clienteResponse.retorno.forEach(cliente => {
      if (cliente.idCliente == idCliente){
        console.log("ID localizado com sucesso"+idCliente);
        console.log("CPF do usuário: "+cliente.nrCPF);
        localStorage['cliente'] = JSON.stringify(cliente);
        this.router.navigate(["/consultaproduto"]);
      }
    });
  }

  closeModal(){
    $('#exampleModal').modal('hide');
    this.router.navigate(["/selecionarcliente"]);
  }
  cadastrarCliente(){
    $('#exampleModal').modal('hide');
    this.router.navigate(["/cadastrarCliente"]);
  }
}
