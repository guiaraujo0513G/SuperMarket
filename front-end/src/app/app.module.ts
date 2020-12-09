import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MainMenuComponent } from './ui/main-menu/main-menu.component';
import { MainToolbarComponent } from './ui/main-toolbar/main-toolbar.component';
import { FabricanteListComponent } from './fabricante/fabricante-list/fabricante-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MainFooterComponent } from './ui/main-footer/main-footer.component';
import { FabricanteFormComponent } from './fabricante/fabricante-form/fabricante-form.component';
import { FormsModule } from '@angular/forms';
import { FornecedorListComponent } from './fornecedor/fornecedor-list/fornecedor-list.component';
import { FornecedorFormComponent } from './fornecedor/fornecedor-form/fornecedor-form.component';
import { TransportadoraListComponent } from './transportadora/transportadora-list/transportadora-list.component';
import { TransportadoraFormComponent } from './transportadora/transportadora-form/transportadora-form.component';
import { LojaFormComponent } from './loja/loja-form/loja-form.component';
import { LojaListComponent } from './loja/loja-list/loja-list.component';
import { ProdutoListComponent } from './produto/produto-list/produto-list.component';
import { ProdutoFormComponent } from './produto/produto-form/produto-form.component';


@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    MainToolbarComponent,
    FabricanteListComponent,
    MainFooterComponent,
    FabricanteFormComponent,
    FornecedorListComponent,
    FornecedorFormComponent,
    TransportadoraListComponent,
    TransportadoraFormComponent,
    LojaFormComponent,
    LojaListComponent,
    ProdutoListComponent,
    ProdutoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
