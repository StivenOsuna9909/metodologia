import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndicerecaudodeaportesPage } from './indicerecaudodeaportes.page';

const routes: Routes = [
  {
    path: '',
    component: IndicerecaudodeaportesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndicerecaudodeaportesPageRoutingModule {}
