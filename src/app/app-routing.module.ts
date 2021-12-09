import { RelComponent } from './pages/rel/rel.component';
import { InsumoComponent } from './pages/insumo/insumo.component';
import { MateriaPrimaComponent } from './pages/materia-prima/materia-prima.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProdutoComponent,
  },
  {
    path: 'materia-prima',
    component: MateriaPrimaComponent,
  },
  {
    path: 'insumo',
    component: InsumoComponent,
  },
  {
    path: 'relatorio',
    component: RelComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
