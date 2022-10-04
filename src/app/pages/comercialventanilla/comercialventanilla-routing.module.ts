import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComercialventanillaPage } from './comercialventanilla.page';

const routes: Routes = [
  {
    path: '',
    component: ComercialventanillaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComercialventanillaPageRoutingModule {}
