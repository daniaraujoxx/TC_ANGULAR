import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-selecionarcliente',
  templateUrl: './selecionarcliente.component.html',
  styleUrls: ['./selecionarcliente.component.css']
})

export class SelecionarclienteComponent implements OnInit {

  @ViewChild('formCliente', {static: true}) formCliente: NgForm;
  pesqCli: String = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    
  }

  pesquisar(): void{
    this.router.navigate(['/relatoriocliente', this.pesqCli]);

  }

}
