import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../relatoriocliente/shared/cliente.model';
import { NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @ViewChild('formProduto', {static: true}) formProduto: NgForm;

  categoriaCliente ={
    idCategoriaCliente: null,
    dsCategoriaCliente: '',
    pcDescontoCliente: 0,
  }

  cliente: Cliente = {
    idCliente: null,
    nmCliente: null,
    dsEmail: null,
    dtCadastro: null,
    nrCPF: null,
    nrRg: null,
    dtNascimento: null,
    dsGenero: null,
    nrTelefoneCliente: null,
    categoriaClienteDTO: this.categoriaCliente,
    enderecos: []
  };
  produto: string = '';

  constructor(public router: Router) { }
  block: boolean = false;

  ngOnInit(): void {

    this.cliente = JSON.parse(localStorage['cliente']);
    if(this.cliente.idCliente == null){
      this.block = true;
    }
    console.log(this.cliente);
  }


  pesquisar(){
    //this.router.navigate(['/consultaproduto', this.produto]);
    this.router.navigateByUrl('/consultaproduto', { skipLocationChange: true }).then(() => {
      this.router.navigate([`consultaproduto/${this.produto}`]);
    });

  }

  sair(): void{
    localStorage.clear();
    this.router.navigate(['login']);
  }


}
