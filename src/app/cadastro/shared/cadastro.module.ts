import { CadastroService } from './cadastro.service';
import { CadastroComponent } from './../cadastro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CadastroComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    CadastroService,
    RouterModule
  ]
})
export class CadastroModule { }
