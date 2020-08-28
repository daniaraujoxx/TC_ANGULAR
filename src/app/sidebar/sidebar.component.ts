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

  cliente: Cliente;
  produto: string = '';

  constructor(public router: Router) { }

  ngOnInit(): void {

    this.cliente = JSON.parse(localStorage['cliente']);
    console.log(this.cliente);
  }


  pesquisar(){
    //this.router.navigate(['/consultaproduto', this.produto]);
    this.router.navigateByUrl('/consultaproduto', { skipLocationChange: true }).then(() => {
      this.router.navigate([`consultaproduto/${this.produto}`]);
    });

  }


}
