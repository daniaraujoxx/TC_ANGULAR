import { AuthGuardService } from './auth/auth-grarg.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt, 'pt-BR');
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { ConsultaprodutoComponent } from './consultaproduto/consultaproduto.component';
import { DevolucaoComponent } from './devolucao/devolucao.component';
import { OfertacupomComponent } from './ofertacupom/ofertacupom.component';
import { ReservaprodutoComponent } from './reservaproduto/reservaproduto.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { SelecionarclienteComponent } from './selecionarcliente/selecionarcliente.component';
import { RelatorioclienteComponent } from './relatoriocliente/relatoriocliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RelatoriocupomComponent } from './relatoriocupom/relatoriocupom.component';
import { FooterComponent } from './footer/footer.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroReservaComponent } from './cadastro-reserva/cadastro-reserva.component';
import { TextMaskModule } from 'angular2-text-mask';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConsultaprodutoComponent,
    DevolucaoComponent,
    OfertacupomComponent,
    ReservaprodutoComponent,
    SidebarComponent,
    LoginComponent,
    SelecionarclienteComponent,
    RelatorioclienteComponent,
    RelatoriocupomComponent,
    FooterComponent,
    CadastroComponent,
    CadastroReservaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TextMaskModule,
  ],
  providers: [
    DatePipe,
    AuthGuardService,
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
