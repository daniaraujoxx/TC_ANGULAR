import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ConsultaprodutoComponent } from './consultaproduto/consultaproduto.component';
import { DevolucaoComponent } from './devolucao/devolucao.component';
import { OfertacupomComponent } from './ofertacupom/ofertacupom.component';
import { ReservaprodutoComponent } from './reservaproduto/reservaproduto.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConsultaprodutoComponent,
    DevolucaoComponent,
    OfertacupomComponent,
    ReservaprodutoComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
