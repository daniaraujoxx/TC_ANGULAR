import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Operador } from '../login/login/shared/operador.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  operador: Operador;

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.operador =JSON.parse(localStorage['operador']);
    console.log(this.operador);
  }
  
  
}
