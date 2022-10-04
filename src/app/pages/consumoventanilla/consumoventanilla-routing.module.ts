import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsumoventanillaPage } from './consumoventanilla.page';

const routes: Routes = [
  {
    path: '',
    component: ConsumoventanillaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsumoventanillaPageRoutingModule {}
