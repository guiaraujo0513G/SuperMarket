import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FabricanteListComponent } from './fabricante/fabricante-list/fabricante-list.component';

const routes: Routes = [
  // Pode haver outras rotas antes
  { path: 'fabricante', component: FabricanteListComponent }
  // Pode haver outras rotas depois
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
