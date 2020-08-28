import { RelatorioReservaService } from './shared/relatorioreserva.service';
import { RelatorioReserva } from './shared/relatorioreserva.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservaproduto',
  templateUrl: './reservaproduto.component.html',
  styleUrls: ['./reservaproduto.component.css']
})
export class ReservaprodutoComponent implements OnInit {
  dados: string = "";
  RelatorioReserva: RelatorioReserva={
    status: 0,
    mensagem: '',
    retorno: null
    };



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private relatorioReservaService: RelatorioReservaService) { }

  ngOnInit(): void {
    this.dados = this.route.snapshot.paramMap.get('dados');
    this.relatorioReservaService.getCliente(this.dados).subscribe(response =>{
      this.RelatorioReserva = response;
      console.log(this.RelatorioReserva);
    });
  }

}
