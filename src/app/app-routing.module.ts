import { CadastroReservaComponent } from './cadastro-reserva/cadastro-reserva.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReservaprodutoComponent } from './reservaproduto/reservaproduto.component';
import { ConsultaprodutoComponent } from './consultaproduto/consultaproduto.component';
import { DevolucaoComponent } from './devolucao/devolucao.component';
import { OfertacupomComponent } from './ofertacupom/ofertacupom.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { SelecionarclienteComponent } from './selecionarcliente/selecionarcliente.component';
import { RelatorioclienteComponent } from './relatoriocliente/relatoriocliente.component';
import {
  AuthGuardService as AuthGuard
} from './auth/auth-grarg.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'

  },

  {
    path: 'login',
    component: LoginComponent

  },
  {
    path: 'selecionarcliente',
    component: SelecionarclienteComponent,
    canActivate: [AuthGuard]

  },

  {
    path: 'relatoriocliente/:dados',
    component: RelatorioclienteComponent,
    canActivate: [AuthGuard]

  },


  {
    path: 'consultaproduto/:produto',
    component: ConsultaprodutoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'consultaproduto',
    component: ConsultaprodutoComponent,
    canActivate: [AuthGuard]
  },
  {
      path: 'devolucao',
      component: DevolucaoComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'ofertacupom',
      component: OfertacupomComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'reservaproduto',
      component: ReservaprodutoComponent,
      canActivate: [AuthGuard]
  },
  {
    path: 'cadastroreservaproduto',
    component: CadastroReservaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cadastroreservaproduto/:cdProduto',
    component: CadastroReservaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
    canActivate: [AuthGuard]
}
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]

})
export class AppRoutingModule { }
