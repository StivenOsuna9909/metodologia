import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndicepromdemorosidadpaPage } from './indicepromdemorosidadpa.page';

const routes: Routes = [
  {
    path: '',
    component: IndicepromdemorosidadpaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndicepromdemorosidadpaPageRoutingModule {}
