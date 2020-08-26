import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReservaprodutoComponent } from './reservaproduto/reservaproduto.component';
import { ConsultaprodutoComponent } from './consultaproduto/consultaproduto.component';
import { DevolucaoComponent } from './devolucao/devolucao.component';
import { OfertacupomComponent } from './ofertacupom/ofertacupom.component';
import { SelecionarclienteComponent } from './selecionarcliente/selecionarcliente.component';
import { RelatorioclienteComponent } from './relatoriocliente/relatoriocliente.component';

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
    component: SelecionarclienteComponent

  },

  {
    path: 'relatoriocliente/:dados',
    component: RelatorioclienteComponent

  },


  {
    path: 'consultaproduto/:produto',
    component: ConsultaprodutoComponent
  },
  {
    path: 'consultaproduto',
    component: ConsultaprodutoComponent
  },
  {
      path: 'devolucao',
      component: DevolucaoComponent
  },
  {
      path: 'ofertacupom',
      component: OfertacupomComponent
  },
  {
      path: 'reservaproduto',
      component: ReservaprodutoComponent
  }
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]

})
export class AppRoutingModule { }
