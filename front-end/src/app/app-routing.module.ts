import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FabricanteListComponent } from './fabricante/fabricante-list/fabricante-list.component';
import { FabricanteFormComponent } from './fabricante/fabricante-form/fabricante-form.component';

const routes: Routes = [
  // Pode haver outras rotas antes
  { path: 'fabricante', component: FabricanteListComponent },
  { path: 'fabricante/novo', component: FabricanteFormComponent },
  { path: 'fabricante/:id', component: FabricanteFormComponent }
  // Pode haver outras rotas depois
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
