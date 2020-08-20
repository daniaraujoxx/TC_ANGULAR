import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { ReservaprodutoComponent } from './reservaproduto/reservaproduto.component';
import { ConsultaprodutoComponent } from './consultaproduto/consultaproduto.component';
import { DevolucaoComponent } from './devolucao/devolucao.component';
import { OfertacupomComponent } from './ofertacupom/ofertacupom.component';

export const routes: Routes = [
 
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
