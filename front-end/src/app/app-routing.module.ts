import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FabricanteListComponent } from './fabricante/fabricante-list/fabricante-list.component';
import { FabricanteFormComponent } from './fabricante/fabricante-form/fabricante-form.component';
import { FornecedorListComponent } from './fornecedor/fornecedor-list/fornecedor-list.component';
import { FornecedorFormComponent } from './fornecedor/fornecedor-form/fornecedor-form.component';
import { TransportadoraListComponent } from './transportadora/transportadora-list/transportadora-list.component';
import { TransportadoraFormComponent } from './transportadora/transportadora-form/transportadora-form.component';
import { LojaListComponent } from './loja/loja-list/loja-list.component';
import { LojaFormComponent } from './loja/loja-form/loja-form.component';
import { ProdutoListComponent } from './produto/produto-list/produto-list.component';
import { ProdutoFormComponent } from './produto/produto-form/produto-form.component';

const routes: Routes = [
    // Pode haver outras rotas antes
    { path: 'fabricante', component: FabricanteListComponent },
    { path: 'fabricante/novo', component: FabricanteFormComponent },
    { path: 'fabricante/:id', component: FabricanteFormComponent },
    // Pode haver outras rotas depois
    { path: 'fornecedor', component: FornecedorListComponent },
    { path: 'fornecedor/novo', component: FornecedorFormComponent },
    { path: 'fornecedor/:id', component: FornecedorFormComponent },

    { path: 'transportadora', component: TransportadoraListComponent },
    { path: 'transportadora/novo', component: TransportadoraFormComponent },
    { path: 'transportadora/:id', component: TransportadoraFormComponent },

    { path: 'loja', component: LojaListComponent },
    { path: 'loja/novo', component: LojaFormComponent },
    { path: 'loja/:id', component: LojaFormComponent },

    { path: 'produto', component: ProdutoListComponent },
    { path: 'produto/novo', component: ProdutoFormComponent },
    { path: 'produto/:id', component: ProdutoFormComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
