import { AuthGuardService } from './auth/auth-grarg.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RelatoriocupomComponent } from './relatoriocupom/relatoriocupom.component';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
