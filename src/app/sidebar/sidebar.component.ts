import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../relatoriocliente/shared/cliente.model';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  cliente: Cliente;

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.cliente = JSON.parse(localStorage['cliente']);
    console.log(this.cliente);
  }
  


}
