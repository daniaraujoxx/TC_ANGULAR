import { routes } from './../app-routing.module';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatoriocliente',
  templateUrl: './relatoriocliente.component.html',
  styleUrls: ['./relatoriocliente.component.css']
})
export class RelatorioclienteComponent implements OnInit {
  dados: String ="";

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.dados = this.route.snapshot.paramMap.get('dados');
    console.log(this.dados);
  }
}
